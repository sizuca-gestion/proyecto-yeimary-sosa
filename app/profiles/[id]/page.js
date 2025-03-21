"use client";
import ViewProfile from "@/modules/profile/components/view-profile";
import { useParams } from "next/navigation";

function ViewProfilePage() {
  const params = useParams();

  return <ViewProfile id={params.id} />;
}

export default ViewProfilePage;
