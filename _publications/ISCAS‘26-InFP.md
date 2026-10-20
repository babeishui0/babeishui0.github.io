---
title: "InFP: A 17.97 TFLOPS/W Reconfigurable SRAM Based Computing-in-Memory Macro for BF16 MAC Operations"
collection: publications
category: conferences
permalink: /publication/ISCAS'26-InFP.html
excerpt: 'In this paper, we propose an energy-efficient and area-efficient digital SRAM-based FP-CIM macro with reconfigurable peripheral logic. '
date: 2026-01-20
venue: 'ISCAS'
Authors: '**Jing Zhang**, Tianchu Dong, Shaoxuan Li, Zhengxi Yan, and Shanshi Huang'
doi: '10.1109/ISCAS66217.2026.11562676'
doiurl: 'https://doi.org/10.1109/ISCAS66217.2026.11562676'
# paperurl: 'http://link-to-paper.com'
# citation: 'Jing Zhang, Tianchu Dong, Shaoxuan Li, Zhengxi Yan, and Shanshi Huang. (2026). "InFP: A 17.97 TFLOPS/W Reconfigurable SRAM Based Computing-in-Memory Macro for BF16 MAC Operation." <i>ISCAS</i>.'
---
## Abstract

<!-- Abstract verified against https://ieeexplore.ieee.org/abstract/document/11562676 -->
As the demand for high-precision training and inference of deep neural networks (DNNs) continues to grow, floating-point (FP) compute-in-memory (CIM) architecture has emerged as an essential solution. However, in contrast to extensively studied integer (INT) CIM, the efficiency of FP-CIM still requires further enhancement. In this paper, we present an energy-efficient and area-efficient digital SRAM-based FP-CIM macro with reconfigurable peripheral logic. Specifically, we design an interleaved SRAM bank with specific weight mapping, which improves SRAM utilization and enables write-compute pipeline scheduling to maximize hardware usage. Additionally, to improve energy efficiency and reduce area requirements, we propose a reconfigurable peripheral logic equipped with a shared addition unit, conducting exponent and mantissa addition at different stages of the FP MAC operation. A 16kb SRAM CIM macro with the proposed techniques is designed in TSMC 45nm CMOS technology and occupies an area of 0.081 mm². The simulation results show that our work achieves a peak energy efficiency of 17.97 TFLOPS/W and an area efficiency of 0.395 TFLOPS/mm² with brain-float 16 (BF16) representation.
