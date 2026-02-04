"use client";

import { useState } from "react";
import CourseNavbar from "../components/CourseNavbar";
import Layout from "../components/Layout";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { SIDEBAR_SECTIONS } from "@/data/sidebarSection";
import CourseHomeView from "../components/CourseHomeView";
import CreateEventView from "../components/CreateEventView";
import CalendarView from "../components/CalendarView";
import ReferralView from "../components/ReferralView";
import  './courseCalender.scss'
export default function CourseCalender() {
     const [activeTab, setActiveTab] = useState('course');
  const [sidebarOpen, setSidebarOpen] = useState(false);
    return (
        <Layout
      sidebar={
        <Sidebar
          isOpen={sidebarOpen}
          toggleSidebar={() => setSidebarOpen(false)}
          sections={SIDEBAR_SECTIONS}
        />
      }
    >
      <Header
        title="Learn about Adobe XD & Prototyping"
        subtitle="Introduction about XD"
        duration="1 hour"
        onMenuClick={() => setSidebarOpen(true)}
      />

      <CourseNavbar activeTab={activeTab} onChange={setActiveTab} />

      {activeTab === 'course' && <CourseHomeView />}
      {activeTab === 'event' && <CreateEventView />}
      {activeTab === 'calendar' && <CalendarView />}
      {activeTab === 'referral' && <ReferralView />}
    </Layout>
    )
}