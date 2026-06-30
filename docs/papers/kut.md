---
title: "KUT: Towards Lightweight On-path Network Assessment for Edge Orchestration"
citation_title: "KUT: Towards Lightweight On-path Network Assessment for Edge Orchestration"
citation_author:
  - "Geng, Wei"
  - "Altas, Oguz Kagan"
  - "Guzman, David"
  - "Bartolomeo, Giovanni"
  - "Mohan, Nitinder"
  - "Ott, Jörg"
citation_publication_date: "2025"
citation_conference_title: "Proceedings of the 21st International Conference on emerging Networking EXperiments and Technologies (CoNEXT '25)"
citation_doi: "10.1145/3765515.3771746"
citation_pdf_url: "https://wgeng.site/papers/conext25-poster-kut.pdf"
---

# KUT: Towards Lightweight On-path Network Assessment for Edge Orchestration

**Wei Geng, Oguz Kagan Altas, David Guzman, Giovanni Bartolomeo, Nitinder Mohan, Jörg Ott**

*Poster, ACM CoNEXT 2025 — 21st International Conference on emerging Networking EXperiments and Technologies, Hong Kong SAR*

[Download PDF Paper](conext25-poster-KUT-paper.pdf){ .md-button .md-button--primary }
[Download PDF (Poster)](conext25-poster-kut.pdf){ .md-button .md-button--primary }
[DOI](https://doi.org/10.1145/3765515.3771746){ .md-button }

## Summary

Edge computing brings computation closer to devices, but current network assessment tools fall short: active probes (e.g., iPerf) saturate bandwidth and starve co-located services, while passive monitors (e.g., Wireshark) cannot predict performance under specific traffic patterns. Neither approach accurately assesses service compatibility. We present KUT, a lightweight, on-path network assessment tool that performs periodic and proactive assessments without interfering with production workloads. KUT uses qualitative traffic modeling rather than full trace replay, capturing key traffic characteristics by modeling fundamental parameters (packet size and transmission timing) to provide meaningful insights with minimal computational cost and network overhead, keeping CPU usage below 20% even at 1000 Mbps. It supports configurable traffic patterns (burst, ramp-up/down, sinusoidal, constant) and can simulate video streaming, VoIP, and file transfers. KUT follows a modular two-layer (control and data) containerized design for easy deployment in heterogeneous edge environments. Preliminary results on Raspberry Pi 4B nodes show that KUT maintains under 10% CPU overhead below 100 Mbps and under 20% at 1000 Mbps, and reveals mutual interference when co-locating burst and constant flows, offering critical insights for service placement decisions. Future work includes hybrid eBPF-based monitoring, orchestrator integration (KubeEdge, K3S, Oakestra), and datacenter evaluation.

## BibTeX

```bibtex
@inproceedings{geng2025poster,
  title={Poster: KUT: Towards Lightweight On-path Network Assessment for Edge Orchestration},
  author={Geng, Wei and Altas, Oguz Kagan and Guzman, David and Bartolomeo, Giovanni and Mohan, Nitinder and Ott, Joerg},
  booktitle={Proceedings of the 21st International Conference on emerging Networking EXperiments and Technologies},
  pages={9--11},
  year={2025},
  doi       = {10.1145/3765515.3771746}
}
```
