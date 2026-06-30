---
title: "SMOOTH: Scalable Multitask Offloading with Backbone Sharing"
citation_title: "SMOOTH: Scalable Multitask Offloading with Backbone Sharing"
citation_author:
  - "Geng, Wei"
  - "Su, Xiang"
  - "Mohan, Nitinder"
  - "Ott, Jörg"
  - "Hui, Pan"
citation_publication_date: "2026"
citation_conference_title: "2026 IFIP Networking Conference (IFIP Networking)"
citation_firstpage: "1"
citation_lastpage: "10"
citation_pdf_url: "https://wgeng.site/papers/ifip-networking26-smooth.pdf"
---

# SMOOTH: Scalable Multitask Offloading with Backbone Sharing

**Wei Geng, Xiang Su, Nitinder Mohan, Jörg Ott, Pan Hui**

*2026 IFIP Networking Conference (IFIP Networking), Lugano, Switzerland, May 2026*

[Download PDF](ifip-networking26-smooth.pdf){ .md-button .md-button--primary }

## Abstract

Intelligent mobile applications are often constrained by limited on-device hardware and by the latency and bandwidth overhead of cloud-based offloading. Offloading computation-intensive deep learning (DL) tasks to edge servers can mitigate these challenges. However, existing systems struggle to scale as the numbers of tasks and users grow. This limitation stems from a fundamental conflict: Requests in edge settings are typically sparse, heterogeneous, and demand immediate processing to minimize latency. However, GPUs operate most efficiently on dense, homogeneous batches, a condition that edge traffic rarely provides. Most existing approaches, including cloud-oriented solutions like Multi-Instance GPU (MIG), fail to resolve this tension because edge devices typically lack the advanced features available in high-end cloud GPUs. This paper contributes SMOOTH, a scalable multitask offloading system that introduces a Sparsity-to-Density Abstraction to resolve this conflict. By decomposing deep learning models into a shared backbone and lightweight task-specific heads, SMOOTH transforms sparse, heterogeneous request streams into dense, homogeneous computation blocks amenable to efficient batching. This allows highly efficient cross-task batching without prohibitive accumulation delays. To further optimize responsiveness, SMOOTH employs a compute-lightweight (O(1)), sparsity-aware adaptive scheduler that dynamically balances inference throughput and end-to-end (E2E) latency based on queue dynamics. Our evaluations demonstrate up to 2.21x higher throughput, 45% lower memory usage, and up to 82% reduced latency across diverse arrival patterns compared to baselines.

## BibTeX

```bibtex
@inproceedings{geng2026smooth,
  author    = {Geng, Wei and Su, Xiang and Mohan, Nitinder and Ott, J{\"o}rg and Hui, Pan},
  title     = {{SMOOTH}: Scalable Multitask Offloading with Backbone Sharing},
  booktitle = {2026 IFIP Networking Conference (IFIP Networking)},
  address   = {Lugano, Switzerland},
  month     = may,
  year      = {2026},
  pages     = {1--10}
}
```
