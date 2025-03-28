# Wealth and Asset Management AI System

This repository contains a comprehensive Wealth and Asset Management AI system designed to assist users in managing their financial portfolios, planning investments, and making informed financial decisions. The system is built on the **UPTIQ platform** and consists of four specialized AI agents, each tailored to a specific financial domain. The overall architecture of the system is visualized in the [block diagram](assets/block%20diagram.png) located in the `assets` folder.

---

## Overview of the System

The system is structured into the following key components:

1. **AI Agents**: Four specialized agents, each with unique features and workflows, located in the `AI Agents` folder.
2. **Visualization**: A block diagram illustrating the system's architecture, located in the `assets` folder.
3. **FinWise Website**: A frontend interface for interacting with the system, located in the `FinWise` folder.

---

## AI Agents

The `AI Agents` folder contains four subfolders, each representing a specialized AI agent. These agents are built on the **UPTIQ platform** and are designed to work collaboratively to provide a seamless wealth and asset management experience.

### 1. **Goal-Based Investment Planner**
   - **Purpose**: Helps users create tailored investment plans based on their financial goals, target amounts, time horizons, and risk tolerance.
   - **Features**:
     - Computes required monthly investments using SIP (Systematic Investment Plan) calculations.
     - Suggests investment options based on risk profiles:
       - **Low Risk**: Fixed Deposits, Debt Mutual Funds.
       - **Moderate Risk**: Hybrid Funds, Index Funds.
       - **High Risk**: Equity, Thematic Funds, ETFs, Stocks.
     - Dynamically adjusts recommendations based on market conditions and user inputs.
     - Considers multiple asset types, including tangible assets like gold and property, to diversify investments.
     - Instead of asking users directly for the monthly investment value, it suggests how much should be invested monthly to achieve their financial goals.
   - **Workflows**:
     - `input-processing-5946.json`: Captures and processes user inputs.
     - `ma-goal-based-investing-5511-primary-workflow-for-goal-based-investing.json`: Primary workflow for goal-based investing.
     - `goal-based-investing-5600.json`: Additional workflows for investment planning.

### 2. **Portfolio Rebalancing**
   - **Purpose**: Provides intelligent portfolio rebalancing suggestions to optimize asset allocation and manage risks.
   - **Features**:
     - Aggregates data from various sources and analyzes portfolio performance.
     - Identifies underperforming assets and recommends optimal asset allocation.
     - Considers multiple asset types, including tangible assets like gold and property, to ensure a diversified portfolio.
     - Uses **Retrieval Augmented Generation (RAG)** techniques for advanced data processing.
   - **Workflows**:
     - `ma-portfolio-rebalancing-suggestions-0864-primary-workflow-for-portfolio-rebalancing-suggestions.json`: Generates rebalancing suggestions.
     - `ma-stock-market-data-analysis-7242-primary-workflow-for-financial-market-analysis.json`: Analyzes stock market data.
     - `stock-symbol-processing-0432.json`: Processes stock symbols for detailed analysis.

### 3. **RAG-Based Asset and Wealth Query Advisor**
   - **Purpose**: Answers user queries related to wealth and asset management using a **Retrieval Augmented Generation (RAG)** approach.
   - **Features**:
     - Retrieves and summarizes financial data from a curated knowledge base.
     - Handles both personalized financial queries (e.g., net worth, asset breakdown) and general financial inquiries (e.g., market trends, economic insights).
   - **Workflows**:
     - `wealth-asset-management-intent-2708.json`: Handles wealth and asset management queries.
     - `general-financial-inquiries-intent-6724.json`: Addresses general financial questions.
     - `ma-wealth-asset-advisor-8549-primary-workflow-for-wealth-asset-advisor.json`: Primary workflow for the advisor.

### 4. **Portfolio Summarizer**
   - **Purpose**: Processes and summarizes portfolio documents to extract key financial insights.
   - **Features**:
     - Extracts data from various document formats (PDFs, images, etc.) using OCR.
     - Summarizes portfolio performance, risks, and rebalancing opportunities.
   - **Workflows**:
     - `ma-document-processing-agent-9163-primary-workflow-for-document-processing-agent.json`: Processes portfolio documents.
     - `invoice-summarizer-0413.json`: Summarizes invoices and financial documents.

---

## Visualization

The overall architecture and workflow of the system are visualized in the [block diagram](assets/block%20diagram.png). This diagram provides a high-level overview of how the AI agents interact and integrate to deliver a cohesive wealth and asset management solution.

---

## FinWise Website

The `FinWise` folder contains the frontend interface for interacting with the AI system. It is built using modern web technologies and serves as the user-facing portal for accessing the features provided by the AI agents. Key files include:
- `index.html`: The main entry point for the website.
- `vite.config.js`: Configuration for the Vite build tool.
- `tailwind.config.js`: Tailwind CSS configuration for styling.

---

## Suggested Improvements

### Suggestions:
1. Diversify assets by including other tangible assets like gold and property.
2. Instead of asking users directly for the monthly investment value, suggest how much should be invested monthly in the goal-based investment planning.

### Implemented:
1. Multiple asset types, including tangible assets like gold and property, are now considered in the **Goal-Based Investment Planner** and **Portfolio Rebalancing Agent**.
2. The **Goal-Based Investment Planner** now suggests the required monthly investment amount instead of asking users to input it directly.
3. All 4 Agents are Completed.

---

## Conclusion

This repository provides a robust and intelligent solution for wealth and asset management, leveraging the power of AI and the UPTIQ platform. Each agent is designed to address specific financial needs, ensuring a comprehensive and user-friendly experience.