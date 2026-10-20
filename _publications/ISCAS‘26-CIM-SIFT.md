---
title: "CIM-SIFT: An Efficient Compute-in-Memory Accelerator for Real-time SIFT Algorithm"
collection: publications
category: conferences
permalink: /publication/ISCAS'26-CIM-SIFT.html
excerpt: 'In this paper, we propose a CIM-based design, namely CIM-SIFT, to accelerate the SIFT keypoint generation. '
date: 2026-01-20
venue: 'ISCAS'
Authors: 'Zhengxi Yan, Cong Wang, Xipeng Lin, **Jing Zhang** and Hongwu Jiang'
doi: '10.1109/ISCAS66217.2026.11562615'
doiurl: 'https://doi.org/10.1109/ISCAS66217.2026.11562615'
# paperurl: 'http://link-to-paper.com'
# citation: 'Jing Zhang, Tianchu Dong, Shaoxuan Li, Zhengxi Yan, and Shanshi Huang. (2026). "InFP: A 17.97 TFLOPS/W Reconfigurable SRAM Based Computing-in-Memory Macro for BF16 MAC Operation." <i>ISCAS</i>.'
---
## Abstract

<!-- Abstract verified against https://ieeexplore.ieee.org/document/11562615/ -->
Feature extraction is fundamental for computer vision tasks and Scale-Invariant Feature Transform (SIFT) is renowned for its robust feature extraction and description capabilities under significant scale and rotational transformations. However, SIFT’s high computational workload poses challenges for deployment in embedded real-time applications. To overcome these limitations, we propose CIM-SIFT, a SRAM-based Compute-in-Memory (CIM) accelerator for efficient SIFT-based keypoint generation. Algorithmically, we replace the multi-layer Gaussian Pyramid (GP) with 2-layer sparse GP and implement direct Difference of Gaussian (DoG) through the use of pre-subtracted Gaussian kernels. In the hardware aspect, we introduce an image-stationary CIM tailored to SIFT’s dataflow, a novel row-based refreshing scheme with sparse kernel design to minimize data movement. For a video graphics array (VGA)-format (640 × 480) image, the proposed algorithm-hardware co-optimizations evaluated at 22nm demonstrate that CIM-SIFT achieves 28.54 TOPS/W energy efficiency with 2201.16 FPS without keypoint matching accuracy degradation (vs. original SIFT) tested on affine covariant feature dataset.
