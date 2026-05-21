import { rooms, getRoomBySlug } from "@/lib/rooms-data";
import { notFound } from "next/navigation";
import RoomDetail from "./RoomDetail";

export async function generateStaticParams() {
  return rooms.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const room = getRoomBySlug(slug);
  if (!room) return {};
  return {
    title: `${room.name} — Imperium Hotel Surabaya`,
    description: room.shortDesc,
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const room = getRoomBySlug(slug);
  if (!room) notFound();
  return <RoomDetail room={room} />;
}
