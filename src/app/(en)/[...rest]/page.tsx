import { notFound } from "next/navigation";

/* Catch-all so unknown paths render this group's 404 with a real 404 status. */
export default function CatchAll() {
  notFound();
}
