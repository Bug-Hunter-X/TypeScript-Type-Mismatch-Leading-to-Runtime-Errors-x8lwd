# TypeScript Type Mismatch

This repository demonstrates a common issue in TypeScript where a type mismatch is not caught at compile time but results in a runtime error. The `printNumber` function expects a number but is called with a string.  TypeScript's type system doesn't prevent this call, leading to a runtime exception.

The solution involves stricter type checking and potentially runtime type guards.