import React, { useEffect, useState } from "react";
import {
  ContentSectionLoadingProps,
  ContentSectionProps,
} from "../../types/types";
import { useAppSelector } from "../../store/hook/hook";
import styles from "./style.module.css";
import { getRandomPoster } from "../../utils/getRandomPoster";

const ContentSection: React.FC<ContentSectionLoadingProps> = ({
  children,
  loading,
}) => {
  return (
    <div className={styles.contentSection}>
      {loading ? (
        <div className={styles.loading}>
          <div className={styles.customloader}></div>
        </div>
      ) : (
        <>{children}</>
      )}
    </div>
  );
};

export default ContentSection;
