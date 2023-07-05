// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
  namespace App {
    interface Error {
      errorId: string | undefined;
    }
    interface PageData {
      flash?: { type: "success" | "error"; message: string };
    }
    // interface Locals {}
    // interface Platform {}
  }
}

export {};
