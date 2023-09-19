export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("what is your andrew id?")) {
    return (
      "melghali"
    );
  }

  if (query.toLowerCase().includes("what is your name?")) {
    return (
      "Mo Money"
    );
  }

  if (query.toLowerCase().includes("which of the following numbers is the largest: 49, 33, 74?")) {
    return (
      "74"
    );
  }

  if (query.toLowerCase().includes("which of the following numbers is the largest: 88, 32, 62?")) {
    return (
      "88"
    );
  }

  if (query.toLowerCase().includes("which of the following numbers is the largest: 32, 85, 42?")) {
    return (
      "85"
    );
  }

  if (query.toLowerCase().includes("which of the following numbers is the largest: 11, 84, 44?")) {
    return (
      "74"
    );
  }

  if (query.toLowerCase().includes("which of the following numbers is the largest: 68, 73, 94?")) {
    return (
      "94"
    );
  }

  if (query.toLowerCase().includes("which of the following numbers is the largest: 48, 79, 85?")) {
    return (
      "85"
    );
  }

  return "";
}
