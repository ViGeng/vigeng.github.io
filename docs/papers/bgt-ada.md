---
title: "Budget-Adaptive Routing: Skipping the Weak When the Strong Answers Anyway"
citation_title: "Budget-Adaptive Routing: Skipping the Weak When the Strong Answers Anyway"
citation_author:
  - "Geng, Wei"
  - "Mohan, Nitinder"
  - "Ott, Jörg"
citation_publication_date: "2026"
citation_conference_title: "Workshop on Networks for AI Computing (SIGCOMM '26)"
citation_doi: "10.1145/3789240.3828740"
citation_firstpage: "1"
citation_lastpage: "9"
citation_pdf_url: "https://wgeng.site/papers/sigcomm-naic26-bgt-ada.pdf"
---

# Budget-Adaptive Routing: Skipping the Weak When the Strong Answers Anyway

**Wei Geng, Nitinder Mohan, Jörg Ott**

*Workshop on Networks for AI Computing (NAIC '26), co-located with ACM SIGCOMM 2026, August 17–21, 2026, Denver, CO, USA*

[Download PDF](sigcomm-naic26-bgt-ada.pdf){ .md-button .md-button--primary }
[DOI](https://doi.org/10.1145/3789240.3828740){ .md-button }

## Abstract

Edge-cloud inference collaborations are often designed with a routing estimator that decides whether to offload each frame from weak models at the edge to stronger models in the cloud. Existing systems place the routing estimator after the weak detector, so the weak forward pass still runs on frames that are later offloaded. In this paper, we argue that this weak-conditioned design can be suboptimal when the offload budget varies. First, we present a competitive weak-skipping estimator (0.153 GFLOPs, ~29× lighter than the weak detector at 4.49 GFLOPs) that extracts routing signal from raw pixels, outperforming the common after-weak placement weak-conditioned baselines. Second, we show that neither weak-skipping nor weak-conditioned placement dominates across the full operating curve, and we propose budget-adaptive routing, which selects between them by offload budget via two offline-tuned thresholds. On PASCAL VOC, our budget-adaptive router traces the upper accuracy envelope of both fixed placements across the operating range. Our method reduces per-frame latency by up to 19.1 ms (~30% lower at ρ=0.9). Besides outperforming SOTA methods, it is surprisingly stronger than the strong model (+1.7 pp over the strong model's peak mAP) at some operating points with far less compute.

## BibTeX

```bibtex
@inproceedings{geng2026budget,
  author    = {Geng, Wei and Mohan, Nitinder and Ott, J{\"o}rg},
  title     = {Budget-Adaptive Routing: Skipping the Weak When the Strong Answers Anyway},
  booktitle = {Workshop on Networks for AI Computing (SIGCOMM '26)},
  address   = {Denver, CO, USA},
  month     = aug,
  year      = {2026},
  numpages  = {9},
  doi       = {10.1145/3789240.3828740}
}
```
