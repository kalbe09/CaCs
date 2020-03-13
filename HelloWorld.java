// SPDX-FileCopyrightText: 2020 Jens Lechtenbörger
// SPDX-License-Identifier: CC0-1.0

public class HelloWorld
{
    public static void main(String args[]) {
        System.out.println("Hello World!");
        System.out.println();
        System.out.println("This program requires a command line argument.");
        System.out.println("If necessary, perform a Web search how to pass an argument.");
        System.out.println("(In particular, if you do not invoke the compiled program from a command line.)");
        System.out.println();
        System.out.println("You passed this argument: " + args[0]);
    }
}
