import "@testing-library/jest-dom";

declare global {
  namespace jest {
    interface Matchers<R> {
      // Hier fügst du alle "custom matchers" hinzu, die du brauchst:
      toBeInTheDocument(): R;
      // (Optional) toHaveTextContent? toHaveClass? usw.:
      // toHaveTextContent(text: string | RegExp): R;
      // ...
    }
  }
}

export {};
