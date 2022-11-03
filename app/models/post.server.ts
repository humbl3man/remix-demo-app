import type { Post } from "@prisma/client";
import { prisma } from "~/db.server";

export type { Post };

export async function getPosts() {
  return prisma.post.findMany();
}

export async function getPost(slug: string) {
  return prisma.post.findUnique({ where: { slug } });
}

// type CreatePost = {
//   title: string;
//   slug: string;
//   markdown: string
// }
export async function createPost(
  post: Pick<Post, "slug" | "title" | "markdown">
) {
  return prisma.post.create({ data: post });
}
