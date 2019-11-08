#!/usr/bin/python
# -*- coding: utf-8 -*-
# Copyright (C) 2017-2019 Jens Lechtenbörger
# SPDX-License-Identifier: CC0-1.0
"""
Create and populate table "isotable" with dates according to ISO
8601 in the (preexisting) PostgreSQL database "time".
Might be used to check understanding of functional dependencies by
looking for counter-examples.

Is year, week, dayofmonth a key?
select year, week, dayofmonth, count(*) as dups
from isotable group by year, week, dayofmonth having count(*) > 1;

Does isleapyear, dayofyear, weekday -> week hold?
select isleapyear, dayofyear, weekday, count(distinct week) as dups
from isotable group by isleapyear, dayofyear, weekday having count(distinct week) > 1;
"""

import calendar
from datetime import timedelta, date
import sys

import psycopg2


def daterange(start_date, end_date):
    """Yield dates between start_date and end_date."""
    for datum in range(int((end_date - start_date).days)):
        yield start_date + timedelta(datum)


def populate(conn, start, years):
    """Populate table on connection conn from start year for given years."""
    cursor = conn.cursor()
    for day in daterange(date(start, 1, 1), date(start + years, 1, 1)):
        daystr = day.isoformat()
        dayofmonth = int(day.strftime("%d"))
        dayofyear = int(day.strftime("%j"))
        month = int(day.strftime("%m"))
        year = int(day.strftime("%Y"))
        isoyear, week, weekday = day.isocalendar()
        yweek = "{}-{}".format(isoyear, week)
        isleapyear = calendar.isleap(year)
        cursor.execute("""
        insert into isotable (date, dayofmonth, dayofyear, week, month, weekday, year, yweek, isleapyear)
        values (%s, %s, %s, %s, %s, %s, %s, %s, %s)""",
                       (daystr, dayofmonth, dayofyear, week, month, weekday,
                        year, yweek, isleapyear))
    conn.commit()
    cursor.close()


if __name__ == '__main__':
    if len(sys.argv) <= 2:
        print("Need start year after 1900 and number of years!")
        sys.exit(1)
    START = int(sys.argv[1])
    YEARS = int(sys.argv[2])
    CONN_STRING = "dbname=time"
    CONN = psycopg2.connect(CONN_STRING)
    CURSOR = CONN.cursor()
    CURSOR.execute("drop table if exists isotable")
    CURSOR.execute("""create table isotable (
date date, dayofmonth integer, dayofyear integer,
week integer, month integer, weekday integer, year integer,
yweek varchar(10), isleapyear varchar(10),
primary key(date))""")
    CURSOR.close()
    populate(CONN, START, YEARS)
    CONN.close()
