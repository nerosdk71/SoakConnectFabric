import React, { useState } from "react";
import {
  Button,
  Card,
  CardHeader,
  Textarea,
  Text,
  Tooltip,
} from "@fluentui/react-components";
import { ChevronDown20Regular } from "@fluentui/react-icons";
import { useTranslation } from "react-i18next";
import { ItemWithDefinition } from "../../controller/ItemCRUDController";
import { MonitoringItemDefinition } from "./MonitoringItemDefinition";
import "./MonitoringItem.scss";

interface ItemDetailsSectionProps {
  item?: ItemWithDefinition<MonitoringItemDefinition>;
  messageValue?: string;
  onMessageChange?: (newValue: string) => void;
  onOpenResource: (url: string) => void;
}

export function ItemDetailsSection({
  item,
  messageValue,
  onMessageChange,
  onOpenResource,
}: ItemDetailsSectionProps) {
  const { t } = useTranslation();
  const [expandedItemDetails, setExpandedItemDetails] = useState(true);

  return (
    <div className="monitoring-view">
      <div className="monitoring-content-inner">
        {/* Item Details Expandable Section */}
        <div className="monitoring-section-body">
          <div className="monitoring-expandable-card">
            <button
              className="monitoring-expand-button"
              onClick={() => setExpandedItemDetails(!expandedItemDetails)}
              aria-expanded={expandedItemDetails}
            >
              <ChevronDown20Regular
                className={`monitoring-expand-icon ${expandedItemDetails ? 'expanded' : 'collapsed'}`}
              />
              <Text className="monitoring-expand-title">
                {t('GettingStarted_ItemDetails', 'Item details')}
              </Text>
            </button>

            {expandedItemDetails && (
              <div className="monitoring-expand-content">
                <div className="monitoring-detail-row">
                  <Tooltip content="The display name of this Fabric item" relationship="label">
                    <span className="monitoring-detail-label">{t('Item_Name_Label', 'Item Name')}</span>
                  </Tooltip>
                  <span className="monitoring-detail-value">{item?.displayName || 'SOAK CONNECT'}</span>
                </div>
                <div className="monitoring-detail-row">
                  <Tooltip content="Unique identifier for the workspace containing this item" relationship="label">
                    <span className="monitoring-detail-label">{t('Workspace_ID_Label', 'Workspace ID')}</span>
                  </Tooltip>
                  <span className="monitoring-detail-value">{item?.workspaceId}</span>
                </div>
                <div className="monitoring-detail-row">
                  <Tooltip content="Unique identifier for this specific Fabric item" relationship="label">
                    <span className="monitoring-detail-label">{t('Item_ID_Label', 'Item ID')}</span>
                  </Tooltip>
                  <span className="monitoring-detail-value">{item?.id}</span>
                </div>
                <div className="monitoring-detail-row">
                  <Tooltip content="The type of Fabric item in the format [WorkloadName].[ItemName] (e.g., Org.Monitoring.Monitoring)" relationship="label">
                    <span className="monitoring-detail-label">{t('GettingStarted_WorkspaceType', 'Item Type')}</span>
                  </Tooltip>
                  <span className="monitoring-detail-value">{item?.type}</span>
                </div>
                <div className="monitoring-detail-row">
                  <Tooltip content="The definition is stored as part of the item in Fabric. SOAK CONNECT uses a message to demonstrate the behaviour." relationship="label">
                    <span className="monitoring-detail-label">{t('Item_Definition_Label', 'Item Definition')}</span>
                  </Tooltip>
                  <div className="monitoring-hero-input">
                    <Textarea
                      id="message-input"
                      value={messageValue || item?.definition?.message || ""}
                      onChange={(e, data) => onMessageChange?.(data.value)}
                      placeholder={t('Item_Message_Placeholder', 'Enter a message...')}
                      rows={2}
                      resize="vertical"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Header */}
        <div className="monitoring-section-header">
          <h2 className="monitoring-section-title">
            {t('GettingStarted_SectionTitle', 'Learn more about your workload')}
          </h2>
          <p className="monitoring-section-subtitle">
            {t('GettingStarted_SectionSubtitle', 'These resources will help you take the next steps.')}
          </p>
        </div>

        {/* Resources */}
        <div className="monitoring-resources-section">
          <div className="monitoring-cards-grid">
            {/* Card 1: Getting to know your workload */}
            <Card className="monitoring-resource-card">
              <div className="monitoring-card-header-section">
                <div className="monitoring-card-image-container">
                  <img src="/assets/items/MonitoringItem/card_1.svg" alt="Getting started" className="monitoring-card-image" />
                </div>
                <CardHeader
                  header={<Text weight="semibold">{t('GettingStarted_Card1_Title', 'Getting to know your workload')}</Text>}
                  description={<Text>{t('GettingStarted_Card1_Description', 'See a step-by-step guide for understanding your workload.')}</Text>}
                />
              </div>
              <div className="monitoring-card-body">
                <ul className="monitoring-card-list">
                  <li className="monitoring-card-list-item">{t('GettingStarted_Card1_Bullet1', 'Review your workload\'s structure and components.')}</li>
                  <li className="monitoring-card-list-item">{t('GettingStarted_Card1_Bullet3', 'Explore adding optional features and custom settings.')}</li>
                  <li className="monitoring-card-list-item">{t('GettingStarted_Card1_Bullet2', 'Learn how to build your own item.')}</li>
                </ul>
              </div>
              <div className="monitoring-card-footer">
                <Button appearance="outline" onClick={() => onOpenResource("https://aka.ms/getting-to-know-your-workload")}>
                  {t('GettingStarted_OpenButton', 'Open')}
                </Button>
              </div>
            </Card>

            {/* Card 2: Explore samples and playground */}
            <Card className="monitoring-resource-card">
              <div className="monitoring-card-header-section">
                <div className="monitoring-card-image-container">
                  <img src="/assets/items/MonitoringItem/card_2.svg" alt="Playground" className="monitoring-card-image" />
                </div>
                <CardHeader
                  header={<Text weight="semibold">{t('GettingStarted_Card2_Title', 'Explore samples and playground')}</Text>}
                  description={<Text>{t('GettingStarted_Card2_Description', 'Try available UI components in an interactive environment.')}</Text>}
                />
              </div>
              <div className="monitoring-card-body">
                <ul className="monitoring-card-list">
                  <li className="monitoring-card-list-item">{t('GettingStarted_Card2_Bullet1', 'Explore other workloads.')}</li>
                  <li className="monitoring-card-list-item">{t('GettingStarted_Card2_Bullet2', 'Test UI components in the Workload.')}</li>
                  <li className="monitoring-card-list-item">{t('GettingStarted_Card2_Bullet3', 'Run and explore the sample workload.')}</li>
                </ul>
              </div>
              <div className="monitoring-card-footer">
                <Button appearance="outline" onClick={() => onOpenResource('https://aka.ms/explore-samples-and-playground')}>
                  {t('GettingStarted_OpenButton', 'Open')}
                </Button>
              </div>
            </Card>

            {/* Card 3: Use the Fabric UX system */}
            <Card className="monitoring-resource-card">
              <div className="monitoring-card-header-section">
                <div className="monitoring-card-image-container">
                  <img src="/assets/items/MonitoringItem/card_3.svg" alt="Fabric UX" className="monitoring-card-image" />
                </div>
                <CardHeader
                  header={<Text weight="semibold">{t('GettingStarted_Card3_Title', 'Use the Fabric UX system')}</Text>}
                  description={<Text>{t('GettingStarted_Card3_Description', 'Learn about design patterns and best practices of the platform.')}</Text>}
                />
              </div>
              <div className="monitoring-card-body">
                <ul className="monitoring-card-list">
                  <li className="monitoring-card-list-item">{t('GettingStarted_Card3_Bullet1', 'Build a consistent UI with official components and patterns.')}</li>
                  <li className="monitoring-card-list-item">{t('GettingStarted_Card3_Bullet2', 'Use design tokens and layouts to accelerate development.')}</li>
                  <li className="monitoring-card-list-item">{t('GettingStarted_Card3_Bullet3', 'Apply our accessibility guidelines for an inclusive experience.')}</li>
                </ul>
              </div>
              <div className="monitoring-card-footer">
                <Button appearance="outline" onClick={() => onOpenResource("https://aka.ms/use-fabric-ux-system")}>
                  {t('GettingStarted_OpenButton', 'Open')}
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}