"use client";
import ProfileHeader from "./components/ProfileHeader";
import ProfileTabs from "./components/ProfileTabs";

export default function CollaboratorDetailPage() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <ProfileHeader />
      <ProfileTabs />
    </div>
  );
}