import React from "react";
import { useTranslation } from "react-i18next";

import { WorkloadClientAPI } from "@ms-fabric/workload-client";
import { ItemWithDefinition } from "../../controller/ItemCRUDController";
import { MonitoringItemDefinition } from "./MonitoringItemDefinition";
import { ItemEditorEmptyView, EmptyStateTask } from "../../components/ItemEditor";
import "./MonitoringItem.scss";

interface MonitoringItemEmptyViewProps {
  workloadClient: WorkloadClientAPI;
  item?: ItemWithDefinition<MonitoringItemDefinition>;
  onNavigateToGettingStarted: () => void;
}

/**
 * Empty state component - the first screen users see
 * This is a static page that can be easily removed or replaced by developers
 * 
 * To skip this page, modify MonitoringItemEditor.tsx line 25,55
 * to always set currentView to 'getting-started'
 * 
 * This component uses the ItemEditorEmptyView control for consistency
 * across all item types.
 */
export function MonitoringItemEmptyView({
  workloadClient,
  item,
  onNavigateToGettingStarted
}: MonitoringItemEmptyViewProps) {
  const { t } = useTranslation();

  // Define onboarding tasks
  const tasks: EmptyStateTask[] = [
    {
      id: 'getting-started',
      label: t('MonitoringItemEmptyView_StartButton', 'Getting Started'),
      icon: undefined,
      description: t('MonitoringItemEmptyView_StartButton_Description', 'Learn how to set up your SOAK CONNECT item.'),
      onClick: onNavigateToGettingStarted,
    }
  ];

  return (
    <ItemEditorEmptyView
      title={t('MonitoringItemEmptyView_Title', 'Welcome to SOAK CONNECT!')}
      description={t('MonitoringItemEmptyView_Description', 'This is the first screen people will see after an item is created. Include some basic information to help them continue.')}
      imageSrc="/assets/items/MonitoringItem/EditorEmpty.svg"
      imageAlt="Empty state illustration"
      tasks={tasks}
    />
  );
}