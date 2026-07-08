---
title: "Test-Time Accuracy Indicators for Object Detection"
description: "B.Sc. thesis by Zhenghao Lu, supervised by Wei Geng at TUM — a training-free temporal-consistency indicator (PTC-IoU) for adaptive video object detection."
citation_title: "Test-Time Accuracy Indicators for Object Detection"
citation_author:
  - "Lu, Zhenghao"
citation_publication_date: "2026/06/30"
citation_dissertation_institution: "Technical University of Munich"
citation_pdf_url: "https://wgeng.site/teaching/theses/tum-bsc-zhenghao-thesis.pdf"
---

# Test-Time Accuracy Indicators for Object Detection

**Zhenghao Lu**

*B.Sc. Thesis in Informatics — Technical University of Munich, [Chair of Connected Mobility](https://www.ce.cit.tum.de/cm/home/)*

- **Author:** Zhenghao Lu
- **Supervisor:** Wei Geng, M.Phil., M.Eng
- **Examiner:** Prof. Dr.-Ing. Jörg Ott
- **Submitted:** 30 June 2026
- **Presented:** 8 July 2026

[Download Thesis (PDF)](tum-bsc-zhenghao-thesis.pdf){ .md-button .md-button--primary } [Presentation Slides](tum-bsc-zhenghao-slides.pdf){ .md-button }

## Abstract

Video object detection systems usually have to balance detection accuracy and computational efficiency. Powerful detectors can provide more reliable prediction results but come with higher inference costs, while lightweight detectors are more efficient but may not perform well on difficult frames. This thesis investigates whether frame-level difficulty can be estimated during testing and used to adaptively route between weak detectors and strong detectors.

One important characteristic of video frames is temporal consistency, which indicates that detection results in consecutive frames should also remain consistent. Existing quality estimation methods often require additional learning components or fail to explicitly utilize temporal consistency in videos. To address this issue, this thesis proposes a temporal-consistency-based indicator called PTC-IoU that utilizes detection, association and localization consistency and estimates frame difficulty by analyzing the stability of detector outputs between adjacent frames, without requiring additional training.

This method was evaluated on the MOT17 dataset, using the weak detector Faster R-CNN MobileNetV3 and the strong detector Faster R-CNN ResNet50-FPN-V2. The evaluation was conducted from three aspects: ranking quality, routing effectiveness and computational performance. The results show that PTC-IoU provides meaningful frame-level difficulty estimation. Compared with learning-based baselines such as GFL and IoU-Net, its routing performance is competitive and it only introduces minor additional runtime overhead. Overall, the results indicate that temporal consistency can serve as a lightweight and practical signal in adaptive video object detection.

## BibTeX

```bibtex
@mastersthesis{lu2026testtime,
  author  = {Lu, Zhenghao},
  title   = {Test-Time Accuracy Indicators for Object Detection},
  school  = {Technical University of Munich},
  type    = {Bachelor's Thesis},
  address = {Munich, Germany},
  month   = jun,
  year    = {2026}
}
```
