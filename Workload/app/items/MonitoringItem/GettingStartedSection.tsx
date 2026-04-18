import React from "react";
import { Link } from "@fluentui/react-components";
import { Open16Regular } from "@fluentui/react-icons";
import { useTranslation } from "react-i18next";
import "./MonitoringItem.scss";

interface GettingStartedSectionProps {
  onOpenResource: (url: string) => void;
}

export function GettingStartedSection({ onOpenResource }: GettingStartedSectionProps) {
  const { t } = useTranslation();

  return (
    <div className="monitoring-view">
      <div className="monitoring-next">
        <div className="monitoring-section-header">
          <h2 className="monitoring-section-title">Getting started</h2>
          <p className="monitoring-section-subtitle">
            {t('GettingStarted_SectionSubtitle', 'Follow the steps below to save your Fabric item.')}
          </p>
        </div>
        <div className="monitoring-section-body">
          <ol className="monitoring-next-list">
            <li className="monitoring-next-item">
              {t('GettingStarted_Card1_Bullet1', 'Change the item definition on the right.')}
            </li>
            <li className="monitoring-next-item">
              {t('GettingStarted_Card1_Bullet2', 'Save the item, to store the state in Fabric.')}
            </li>
          </ol>
        </div>
        <hr className="monitoring-separator-line" />
        <div className="monitoring-section-header">
          <h2 className="monitoring-section-title">Bring your ideas to life</h2>
          <p className="monitoring-section-subtitle">
            {t('GettingStarted_SectionSubtitle', 'Follow the steps below to build a new Fabric item.')}
          </p>
        </div>
        <div className="monitoring-section-body">
          <ol className="monitoring-next-list">
            <li className="monitoring-next-item">
              {t('GettingStarted_Card1_Bullet3', 'Use the content on the right to learn more.')}
            </li>
            <li className="monitoring-next-item">
              {t('GettingStarted_Card1_Bullet4', 'Create your own Fabric item.')}
              <div className="monitoring-step-button">
                <Link onClick={() => onOpenResource("https://aka.ms/fabric-item-development-guide")}>
                  {t('GettingStarted_OpenTutorial', 'Open Tutorial')}
                  <Open16Regular style={{ marginLeft: '4px' }} />
                </Link>
              </div>
            </li>
            <li className="monitoring-next-item">
              {t('GettingStarted_Card1_Bullet5', 'Publish your workload.')}
              <div className="monitoring-step-button">
                <Link onClick={() => onOpenResource("https://aka.ms/fabric-workload-publishing-guide")}>
                  {t('GettingStarted_OpenTutorial', 'Open Tutorial')}
                  <Open16Regular style={{ marginLeft: '4px' }} />
                </Link>
              </div>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}