export type Language = "C" | "C++";

export type CppRevision =
  | "C++98"
  | "C++11"
  | "C++14"
  | "C++17"
  | "C++20"
  | "C++23"
  | "C++26";
export type CRevision = "C89" | "C95" | "C99" | "C11" | "C17" | "C23" | "C29";
export type CxxRevision = CppRevision | CRevision;

export type DRKind = "cwg" | "lwg";
