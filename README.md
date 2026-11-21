# codenova-devops-task2
# CodeNova DevOps Internship - Task 02: Automated Multi-Version CI Testing Pipeline

![Multi-Version CI Pipeline](https://github.com/PasinduSehan/codenova-devops-task2/actions/workflows/test.yml/badge.svg)

This repository implements an automated Continuous Integration (CI) pipeline using **GitHub Actions** to validate code quality, linting rules, and unit tests across multiple Node.js runtime versions.

---

## 🚀 Pipeline Architecture & Features

* **Automated Triggers:** Runs automatically on every `push` and `pull_request` targeting the `main` branch.
* **Multi-Version Matrix Strategy:** Tests the application concurrently across **Node.js 18.x** and **Node.js 20.x** environments.
* **Dependency Caching:** Utilizes `actions/setup-node` built-in `npm` caching for faster workflow execution.
* **Code Quality & Linting:** Enforces strict code formatting and syntax rules using **ESLint**.
* **Automated Unit Testing:** Runs unit test suites via **Jest** and fails the build immediately (non-zero exit code) if any assertion fails.
* **PR Merge Protection:** Branch protection rules prevent Pull Requests from merging into `main` unless all CI matrix jobs pass.

---

## 📁 Project Structure

```text
codenova-devops-task2/
├── .github/
│   └── workflows/
│       └── test.yml          # GitHub Actions CI workflow configuration
├── src/
│   └── calculator.js         # Core application module
├── tests/
│   └── calculator.test.js    # Jest unit test suite
├── .eslintrc.json            # ESLint configuration rules
├── .gitignore                # Ignored files and node_modules
├── LICENSE                   # MIT License
├── package.json              # Project dependencies and scripts
└── README.md                 # Pipeline documentation & status badge


<img width="1366" height="768" alt="Screenshot (574)" src="https://github.com/user-attachments/assets/1ae56cc9-da77-474c-85ce-37be87bbae61" />
