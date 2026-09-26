# 🌐 SageWorks AI — Official Website

<div align="center">

**Building Temporal & Network-Native AI Ecosystems**

[![Itch.io](https://img.shields.io/badge/Itch.io-peacebinflow-FA5C5C?style=for-the-badge&logo=itch.io&logoColor=white)](https://peacebinflow.itch.io/)
[![Substack](https://img.shields.io/badge/Substack-binflow-FF6719?style=for-the-badge&logo=substack&logoColor=white)](https://substack.com/@binflow?utm_source=user-menu)
[![Substack](https://img.shields.io/badge/Substack-peacebinflowai-FF6719?style=for-the-badge&logo=substack&logoColor=white)](https://peacebinflowai.substack.com/)
[![HackerNoon](https://img.shields.io/badge/HackerNoon-peacebinflow-black?style=for-the-badge&logo=hackernoon&logoColor=white)](https://hackernoon.com/u/peacebinflow)
[![Website](https://img.shields.io/badge/Website-Live-brightgreen?style=for-the-badge)](https://peacebinflow.github.io/sageworks-ai)
[![GitHub](https://img.shields.io/badge/GitHub-PEACEBINFLOW-blue?style=for-the-badge&logo=github)](https://github.com/PEACEBINFLOW)
[![DEV](https://img.shields.io/badge/DEV-peacebinflow-black?style=for-the-badge&logo=dev.to)](https://dev.to/peacebinflow)
[![Kaggle](https://img.shields.io/badge/Kaggle-peacebinflow-20BEFF?style=for-the-badge&logo=kaggle)](https://www.kaggle.com/peacebinflow)
[![F6S](https://img.shields.io/badge/F6S-sageworks--ai-FF6B35?style=for-the-badge)](https://www.f6s.com/sageworks-ai)

**🔗 Live Site:** [https://peacebinflow.github.io/sageworks-ai](https://peacebinflow.github.io/sageworks-ai)
**🏢 Company Profile:** [f6s.com/sageworks-ai](https://www.f6s.com/sageworks-ai)

</div>

---

## 📖 About

This repository hosts the official website for the **SageWorks AI** ecosystem — an experimental lab for temporal intelligence, network-native computing, and cognitive event processing. Built and maintained by **Peace Thabiwa** from Botswana, SageWorks AI represents a paradigm shift from static data storage to living, time-aware computational systems.

### 🎯 Mission

SageWorks AI explores what happens when you stop treating computation as isolated requests and start treating it as **timelines**: sequences of events, trades, notifications, and signals that can be measured, replayed, and reasoned about.

---

## 🏗️ Core Ecosystem Components

### 🌊 **LAW Network (LAW-N)**
*Time-labeled signal infrastructure*

The network layer that treats every interaction as a time-labeled signal crossing a graph of agents, devices, and services. Instead of "calling an API," you define **laws**: priority, routes, access, and temporal scope.

- **Core Specs:** Network layer definitions and device profiles
- **N-SQL Engine:** Network-aware, time-labeled SQL queries
- **Signal Simulator:** Testing and validation tooling
- **Notebook Hub:** Interactive LAW-N experiments

**Key Repos:**
- [`law-n-network-layer`](https://github.com/PEACEBINFLOW/minds-eye-law-n-network)
- [`law-n-sql-core`](https://github.com/PEACEBINFLOW/law-n-sql-core)
- [`law-n-signal-sim`](https://github.com/PEACEBINFLOW/law-n-signal-sim)

---

### 👁️ **MindsEye OS**
*Cognitive event processing & perception streams*

The cognitive layer over LAW-N that treats inboxes, notifications, logs, and ledgers as **one continuous perception stream** rather than scattered tables and logs.

- **Workspace Automation:** Google-native ledgers and orchestration
- **Agent Fabric:** Chrome, Android, and device-layer agents
- **Binary Engine:** Pattern recognition and entropy scoring
- **SQL Bridges:** Time-aware database integration

**Key Repos:**
- [`mindseye-workspace-automation`](https://github.com/PEACEBINFLOW/mindseye-workspace-automation)
- [`mindseye-binary-engine`](https://github.com/PEACEBINFLOW/mindseye-binary-engine)
- [`mindseye-gemini-orchestrator`](https://github.com/PEACEBINFLOW/mindseye-gemini-orchestrator)

---

### 🔢 **Network SQL (N-SQL)**
*SQL that routes across networks*

SQL reimagined for network-native systems. Queries that understand **temporal context**, **device location**, and **network topology**.

```sql
-- Example: Time-aware network query
SELECT * FROM agents 
WHERE timestamp > NOW() - INTERVAL '5 minutes'
AND network_hop <= 3
ORDER BY temporal_weight DESC;
```

**Key Repos:**
- [`law-n-nsql-engine`](https://github.com/PEACEBINFLOW/law-n-nsql-engine)
- [`law-n-sql-playground`](https://github.com/PEACEBINFLOW/law-n-sql-playground)

---

### ⏰ **LAW-T Programming Language**
*Time-native, self-evolving code*

A programming model that writes directly into binary ledgers with **time as a first-class dimension**. Every variable, function, and class carries temporal metadata.

```javascript
// LAW-T conceptual syntax
temporal function processEvent(data: TimedData) {
  let result = compute(data) @timestamp;
  return result.withContext(temporal.now());
}
```

**Key Repos:**
- [`mindseye-binary-engine`](https://github.com/PEACEBINFLOW/mindseye-binary-engine)

---

### 🧊 **Dimensional UI / UNO**
*Hypercube interfaces & multi-dimensional interaction*

Front-end experiments for agentic, dimensional interfaces that extend beyond traditional 2D UI paradigms.

**Key Repos:**
- [`dimensional-ui-hypercube-uno`](https://github.com/PEACEBINFLOW/dimensional-ui-hypercube-uno)

#### ∠ AngleCore Engines
*Interior/exterior angle duality as the interface itself*

Two builds under the AngleCore name, both driven by the same core tension — what a space or interface **feels like** from the inside versus how it **reads** from the outside:

- **AngleCore Dungeon Engine** — split-view non-euclidean dungeon renderer. The 2D field shows exterior-angle ray vectors and node distortion type; the 3D panel shows the interior-angle-driven room feel (acute rooms expand, obtuse rooms compress/fold), with a chaos mode pushing acute rooms into impossible interior volumes.
- **AngleCore Focus Interface Engine** — a dynamic UI where every node holds five precomputed states (idle, nearby, hover, focused, far) simultaneously, and cursor proximity continuously interpolates between them instead of firing discrete hover events. Nothing loads; the field reveals structures that already existed at frame 0.

Both feed the same icon/branding layer used on this site — see **AngleCore SVG System** below.

---

### 🔗 **G2N Layers**
*Google-to-Network integration stack*

Multi-surface cognition layers connecting Google Workspace, device events, and network signals into unified temporal streams.

**Layers:**
1. **Google Layer** — Workspace event capture
2. **MindsEye Core Layer** — Cognitive processing
3. **Device Binary Layer** — Local event streams
4. **Dataset Builder** — Kaggle integration

**Key Repos:**
- G2N notebooks available on [Kaggle](https://www.kaggle.com/peacebinflow)

---

## 🎨 Design System

### **AngleCore SVG System**
The site's icons are no longer emoji — every icon (`brand`, `mission`, `contact`, footer) is a geometric, angle/line-based SVG defined in `assets/js/anglecore/svg-icons.js` and mounted at load via `data-icon="<name>"` attributes. The visual language (open angles, polygon nodes) mirrors the interior/exterior duality the AngleCore engines are built on. `assets/js/anglecore/anglecore-core.js` adds a subtle duality hover-tilt to any card tagged `data-anglecore` (AngleCore Business OS, HF Space, Dungeon Engine, Focus Interface Engine).

### **Solar Palette**
Colors are black + orange only, expressed as a shade scale rather than separate hues:

| Token | Hex | Use |
|---|---|---|
| `--accent-lighter` | `#ffd9b3` | Research level accent, lightest highlights |
| `--accent-light` | `#ffb066` | Links, secondary stat numbers |
| `--accent` | `#ff6b35` | Base solar orange, Practical level accent |
| `--accent-dark` | `#cc4a1a` | Experimental level accent |
| `--accent-darker` | `#7a2c0d` | Near-black orange, gradients/shadows |
| `--bg` / `--bg-soft` / `--bg-card` | near-black scale | Background layers |

---

## 📊 Tech Stack

### **Core Technologies**
- **Languages:** TypeScript, Python, JavaScript, Kotlin, Solidity
- **Frameworks:** Node.js, React, Next.js
- **Databases:** MongoDB, PostgreSQL, TigerData (Timescale)
- **AI/ML:** Google Gemini, LangChain, Custom temporal models
- **Infrastructure:** Docker, GitHub Actions, Cloudflare Workers

### **Development Tools**
- **Version Control:** Git, GitHub
- **CI/CD:** GitHub Actions
- **Deployment:** GitHub Pages, Vercel
- **Testing:** Jest, Pytest, Kaggle notebooks

---

## 🗂️ Repository Structure
