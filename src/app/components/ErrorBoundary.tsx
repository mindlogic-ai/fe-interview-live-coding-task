// File: app/components/ErrorBoundary.tsx
"use client";

import { Component, ReactNode } from "react";
import styles from "../page.module.css";

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

export default class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.log("Something went wrong");
  }

  render() {
    if (this.state.hasError) {
      return <div className={styles.errorContainer}>Something went wrong.</div>;
    }

    return this.props.children;
  }
}
