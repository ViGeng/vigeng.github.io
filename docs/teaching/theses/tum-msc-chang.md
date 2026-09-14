---
title: "Towards Edge Power Measurement: A Low-Cost, Programmable Power Meter"
description: "M.Sc. thesis by Chang Lu, supervised by Wei Geng at TUM — a low-cost, networked power meter for measuring edge-device energy consumption."
citation_title: "Towards Edge Power Measurement: A Low-Cost, Programmable Power Meter"
citation_author:
  - "Lu, Chang"
citation_publication_date: "2026/08/31"
citation_dissertation_institution: "Technical University of Munich"
citation_pdf_url: "https://wgeng.site/teaching/theses/tum-msc-chang-thesis.pdf"
---

# Towards Edge Power Measurement: A Low-Cost, Programmable Power Meter

**Chang Lu**

*M.Sc. Thesis in Electrical Engineering — Technical University of Munich, [Chair of Connected Mobility](https://www.ce.cit.tum.de/cm/home/)*

- **Author:** Chang Lu
- **Supervisor:** Wei Geng
- **Examiner:** Prof. Dr.-Ing. Jörg Ott
- **Submitted:** 31 August 2026
- **Presented:** 21 August 2026

[Download Thesis (PDF)](tum-msc-chang-thesis.pdf){ .md-button .md-button--primary } [Presentation Slides](tum-msc-chang-slides.pdf){ .md-button }

## Abstract

Many edge devices cannot measure their own power consumption, and onboard sensors often miss peripheral power consumption, such as that of network interfaces. Laboratory instruments provide accurate measurements but are expensive and difficult to scale across several devices. This thesis addresses this gap by constructing a low-cost, networked power meter using INA current sensors and an ESP32-C6 microcontroller, with parts costing approximately €27.

The firmware provides mutually exclusive acquisition modes for averaged monitoring, burst and streaming capture, and transition capture. Measurements are transmitted over Wi-Fi through MQTT or an HTTP REST API. After calibration, the current error remained within 0.10% on the Raspberry Pi 5 and Jetson channels in independent validation runs. Post-hoc cross-correlation of natural load transitions aligned the power trace with host logs with a median error of 132 μs. A message required only 0.72 ms, allowing multiple consumers to subscribe simultaneously.

The thesis applies the meter to offloading case studies on an ESP32-S3, a Raspberry Pi 5, and a Jetson Orin Nano. Under the evaluated baseline accounting, a ResNet-8 inference costs 0.55 mJ on the Raspberry Pi 5 and 173.2 mJ on the ESP32-S3. Excluding communication energy, offloading therefore saves energy from the first inference of a round.

## BibTeX

```bibtex
@mastersthesis{lu2026edgepower,
  author  = {Lu, Chang},
  title   = {Towards Edge Power Measurement: A Low-Cost, Programmable Power Meter},
  school  = {Technical University of Munich},
  type    = {Master's Thesis},
  address = {Munich, Germany},
  month   = aug,
  year    = {2026}
}
```
