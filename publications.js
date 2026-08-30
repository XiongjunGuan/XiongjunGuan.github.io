(function () {
    const featuredPaperIds = [
        "paper-egoschema",
        "paper-bifingerpose",
        "paper-joint-pose-verification",
        "paper-phase-registration"
    ];

    const publicationGroups = [
        {
            id: "pub-mllm",
            quickLabel: "MLLMs",
            quickLabelZh: "多模态大模型",
            quickIconClass: "mllm",
            title: "MLLMs & Video Understanding",
            titleZh: "多模态大模型与视频理解",
            subtitle: "Works on multi-modal large models, post-training, agentic workflow, and harness engineering.",
            subtitleZh: "围绕多模态大模型、后训练、Agent 工作流与 Harness Engineering 的相关工作。",
            papers: [
                {
                    id: "paper-mer25",
                    image: "images/mm2025_mer_track1.png",
                    alt: "More is Better: A Moe-based Emotion Recognition Framework with Human Preference Alignment",
                    meta: "ACM MM 2025 Challenge",
                    year: 2025,
                    ccf: "A",
                    type: "conference",
                    topics: ["llm-foundation", "video-understanding"],
                    highlights: [{ className: "rank", text: "2nd Place" }],
                    title: "More is Better: A Moe-based Emotion Recognition Framework with Human Preference Alignment",
                    authorsHtml: "Jun Xie*, Yingjian Zhu*, Feng Chen, Zhenghao Zhang, Xiaohui Fan, Hongzhu Yi, Xinming Wang, Chen Yu, Yue Bi, Zhaoran Zhao, <strong>Xiongjun Guan (Corresponding Author)</strong>, Zhepeng Wang",
                    venue: "Multi-modal emotion recognition with leveraged signals, samples and deliberation.",
                    keywords: [
                        "Affective Computing",
                        "Multi-Modal Learning",
                        "Semi-Supervised Learning",
                        "Mixture of Experts",
                        "Human Preference Alignment",
                        "Instruction Tuning",
                        "Model Calibration"
                    ],
                    links: [
                        { label: "Paper", href: "https://arxiv.org/abs/2508.06036" },
                        { label: "Code", href: "https://github.com/zhuyjan/MER2025-MRAC25" },
                        { label: "Slides", href: "docs/MER2025-track1.pptx" },
                        { label: "Challenge", href: "https://zeroqiaoba.github.io/MER2025-website/" }
                    ]
                },
                {
                    id: "paper-mer25-track2",
                    image: "images/mm2025_mer_track2.png",
                    alt: "ZeroES: Zero-Shot Ensemble for Open-Vocabulary Video Emotion Recognition with Large Multimodal Models",
                    meta: "ACM MM 2025 Challenge",
                    year: 2025,
                    ccf: "A",
                    type: "conference",
                    topics: ["llm-foundation", "video-understanding"],
                    highlights: [{ className: "rank", text: "2nd Place" }],
                    title: "ZeroES: Zero-Shot Ensemble for Open-Vocabulary Video Emotion Recognition with Large Multimodal Models",
                    authorsHtml: "Jun Xie*, Xiaohui Fan*, Zhenghao Zhang, Feng Chen, Hongzhu Yi, Yingjian Zhu, <strong>Xiongjun Guan</strong>, Xinming Wang, Yue Bi, Tao Zhang, Zhepeng Wang",
                    venue: "Fine-grained multi-modal emotion recognition via multi MLLMs and model ensemble.",
                    keywords: [
                        "Affective Computing",
                        "Open-Vocabulary Recognition",
                        "Zero-Shot Learning",
                        "Context Engineering",
                        "Multi-Model Ensemble",
                        "Instruction Tuning"
                    ],
                    links: [
                        { label: "Paper", href: "https://doi.org/10.1145/3746270.3760218" },
                        { label: "Code", href: "https://github.com/zhuyjan/MER2025-MRAC25" },
                        { label: "Slides", href: "docs/MER2025-track2.pptx" },
                        { label: "Challenge", href: "https://zeroqiaoba.github.io/MER2025-website/" }
                    ]
                },
                {
                    id: "paper-egoschema",
                    image: "images/cvpr2025_VQA.png",
                    alt: "Four Eyes Are Better Than Two: Harnessing the Collaborative Potential of Large Models via Differentiated Thinking and Complementary Ensembles",
                    meta: "CVPR 2025 Challenge",
                    year: 2025,
                    ccf: "A",
                    type: "conference",
                    topics: ["llm-foundation", "video-understanding"],
                    highlights: [
                        { className: "rank", text: "2nd Place" },
                        { className: "featured", text: "Featured" }
                    ],
                    title: "Four Eyes Are Better Than Two: Harnessing the Collaborative Potential of Large Models via Differentiated Thinking and Complementary Ensembles",
                    authorsHtml: "Jun Xie*, <strong>Xiongjun Guan*</strong>, Yingjian Zhu, Zhaoran Zhao, Xinming Wang, Hongzhu Yi, Feng Chen, Zhepeng Wang",
                    venue: "Long-form video understanding and robustness evaluation via Chain of Thought and harness engineering.",
                    keywords: [
                        "Long Video Understanding",
                        "Video Question-Answering",
                        "Chain of Thought",
                        "Harness Engineering",
                        "Ensemble Learning",
                        "Agentic Workflow",
                        "Instruction Tuning",
                        "Model Calibration"
                    ],
                    links: [
                        { label: "Paper", href: "https://arxiv.org/abs/2505.16784" },
                        { label: "Code", href: "https://github.com/XiongjunGuan/EgoSchema-CVPR25" },
                        { label: "Challenge", href: "https://egoschema.github.io" }
                    ]
                },
                {
                    id: "paper-cvrr",
                    image: "images/cvpr2025_cvrr.png",
                    alt: "Team of One: Cracking Complex Video QA with Model Synergy",
                    meta: "CVPR 2025 Challenge",
                    year: 2025,
                    ccf: "A",
                    type: "conference",
                    topics: ["llm-foundation", "video-understanding"],
                    highlights: [{ className: "rank", text: "4th Place" }],
                    title: "Team of One: Cracking Complex Video QA with Model Synergy",
                    authorsHtml: "Jun Xie*, Zhaoran Zhao*, <strong>Xiongjun Guan</strong>, Yingjian Zhu, Hongzhu Yi, Xinming Wang, Feng Chen, Zhepeng Wang",
                    venue: "Open-ended video question answering with collaborative model reasoning.",
                    keywords: [
                        "Video Question-Answering",
                        "Model Collaboration",
                        "Harness Engineering",
                        "Agentic Workflow",
                        "Instruction Tuning",
                        "Model Calibration"
                    ],
                    links: [
                        { label: "Paper", href: "https://arxiv.org/abs/2507.13820" },
                        { label: "Challenge", href: "https://mbzuai-oryx.github.io/CVRR-Evaluation-Suite/" }
                    ]
                }
            ]
        },
        {
            id: "pub-hci",
            quickLabel: "HCI",
            quickLabelZh: "人机交互",
            quickIconClass: "hci",
            title: "Finger-based HCI",
            titleZh: "基于手指的人机交互",
            subtitle: "Works on finger-based human-computer interaction, pose estimation, and sensing.",
            subtitleZh: "围绕基于手指的人机交互、姿态估计与感知的相关工作。",
            papers: [
                {
                    id: "paper-cross-modal-registration-3d-2d",
                    image: "images/arxiv26_2D3D.png",
                    alt: "Cross-Modal Registration Between 3D and 2D Fingerprints via Pose-Aware Unwrapping and Point-Cloud Fusion",
                    meta: "Preprint 2026",
                    year: 2026,
                    ccf: "non-ccf",
                    type: "preprint",
                    topics: ["finger-hci", "biometrics", "geometry-registration"],
                    highlights: [],
                    title: "Cross-Modal Registration Between 3D and 2D Fingerprints via Pose-Aware Unwrapping and Point-Cloud Fusion",
                    authorsHtml: "<strong>Xiongjun Guan</strong>, Jianjiang Feng, Jie Zhou",
                    venue: "A pose-aware 3D-to-2D registration pipeline that unwraps, fuses, and normalizes 3D fingerprints to improve compatibility with both contactless and legacy contact-based 2D matching systems.",
                    keywords: [
                        "Cross-Modal Registration",
                        "Geometric Compatibility",
                        "Pose-Aware Unwrapping",
                        "Point-Cloud Fusion",
                        "Legacy Matcher Compatibility"
                    ],
                    links: [
                        { label: "Paper", href: "https://arxiv.org/abs/2605.15796" },
                        { label: "Code", href: "https://github.com/XiongjunGuan/3DFpVisual" },
                    ]
                },
                {
                    id: "paper-bifingerpose",
                    image: "images/tmc2025_BiFingerPose.png",
                    alt: "BiFingerPose: Bimodal Finger Pose Estimation for Touch Devices",
                    meta: "T-MC 2026",
                    year: 2026,
                    ccf: "A",
                    type: "journal",
                    topics: ["finger-hci", "biometrics", "pose-estimation"],
                    highlights: [
                        { className: "ccfa", text: "CCF-A" },
                        { className: "featured", text: "Featured" }
                    ],
                    title: "BiFingerPose: Bimodal Finger Pose Estimation for Touch Devices",
                    authorsHtml: "<strong>Xiongjun Guan</strong>, Zhiyu Pan, Jianjiang Feng, Jie Zhou",
                    venue: "Multi-modal 2D finger pose estimation with efficient 2D-to-3D mapping for mobile device interaction.",
                    keywords: [
                        "Mobile Interaction",
                        "Pose Estimation",
                        "Multi-Sensor Fusion",
                        "Representation Learning",
                        "Geometric Mapping"
                    ],
                    links: [
                        { label: "Paper", href: "https://arxiv.org/abs/2511.17306" },
                        { label: "Code", href: "https://github.com/XiongjunGuan/DualFingerPose" },
                        { label: "Video", href: "https://drive.google.com/file/d/13swViPqI8LNRa98-6YRdnxVGMY_9kakf/view?usp=drive_link" }
                    ]
                },
                {
                    image: "images/ijcb2025_contactless.png",
                    alt: "Contactless Fingerprint Recognition Guided by 3D Finger Pose",
                    meta: "IJCB 2025",
                    year: 2025,
                    ccf: "C",
                    type: "conference",
                    topics: ["finger-hci", "biometrics", "pose-estimation", "geometry-registration"],
                    highlights: [
                        { className: "ccfa", text: "CCF-C" },
                        { className: "oral", text: "Oral" }
                    ],
                    title: "Contactless Fingerprint Recognition Guided by 3D Finger Pose",
                    authorsHtml: "Haoxiang Pei, Zhiyu Pan, <strong>Xiongjun Guan</strong>, Jianjiang Feng, Jie Zhou",
                    venue: "Leveraging 3D finger pose to improve contactless fingerprint recognition through acquisition guidance and pose constraints.",
                    keywords: [
                        "Contactless Fingerprint",
                        "Pose Estimation",
                        "Geometry-aware Recognition",
                        "Acquisition Guidance"
                    ],
                    links: [
                        { label: "Paper", href: "https://iapr.org/archives/ijcb2025/index.html%3Fp%3D1732.html" }
                    ]
                },
                {
                    id: "paper-ccbr2021",
                    image: "images/ccbr2021_3dfp.png",
                    alt: "Pose-Specific 3D Fingerprint Unfolding",
                    meta: "CCBR 2021",
                    year: 2021,
                    ccf: "non-ccf",
                    type: "conference",
                    topics: ["finger-hci", "biometrics", "pose-estimation", "geometry-registration"],
                    highlights: [{ className: "oral", text: "Oral" }],
                    title: "Pose-Specific 3D Fingerprint Unfolding",
                    authorsHtml: "<strong>Xiongjun Guan</strong>, Jianjiang Feng, Jie Zhou",
                    venue: "Unfolding and visualization method for 3D fingerprints to improve compatibility with 2D images.",
                    keywords: [
                        "3D Fingerprint",
                        "Geometric Unfolding",
                        "Point Cloud Projection"
                    ],
                    links: [
                        { label: "Paper", href: "https://arxiv.org/abs/2404.17149" },
                        { label: "Code", href: "https://github.com/XiongjunGuan/3DFpVisual" },
                        { label: "Slides", href: "docs/CCBR2021.pptx" }
                    ]
                }
            ]
        },
        {
            id: "pub-bio",
            quickLabel: "Image Retrieval",
            quickLabelZh: "图像检索",
            quickIconClass: "bio",
            title: "Image Retrieval",
            titleZh: "图像检索",
            subtitle: "Works on large-scale image retrieval with efficient representation and geometric normalization.",
            subtitleZh: "围绕大规模图像检索、高效表征与几何归一化的相关工作。",
            papers: [
                {
                    id: "paper-uou",
                    image: "images/arxiv26_UoU.png",
                    alt: "UoU: A Universal Fingerprint Foundation Model Based on Large-Scale Unsupervised Learning",
                    meta: "Preprint 2026",
                    year: 2026,
                    ccf: "non-ccf",
                    type: "preprint",
                    topics: ["llm-foundation", "image-retrieval", "biometrics"],
                    highlights: [],
                    title: "UoU: A Universal Fingerprint Foundation Model Based on Large-Scale Unsupervised Learning",
                    authorsHtml: "<strong>Xiongjun Guan</strong>, Jianjiang Feng, Jie Zhou",
                    venue: "We propose UoU, a universal fingerprint foundation model that leverages large-scale unsupervised learning to build unified multi-level fingerprint representations, offering a general-purpose backbone that can be adapted to a wide range of biometric sensing and recognition applications.",
                    keywords: [
                        "Foundation Model",
                        "Large-Scale Self-/Unsupervised Learning",
                        "Unified Representation",
                        "Multi-Task Generalization",
                        "Semantic Token Learning",
                        "Symmetry-Aware Supervision"
                    ],
                    links: [
                        { label: "Paper", href: "https://arxiv.org/abs/2606.17436" },
                        { label: "Code", href: "https://github.com/XiongjunGuan/UoU" }
                    ]
                },
                {
                    id: "paper-fingerprint-reconstruction",
                    image: "images/arxiv26_Reconstruction.png",
                    alt: "Toward the Whole Picture: Accumulative Fingerprint Mapping and Reconstruction for Small-Area Mobile Sensors",
                    meta: "Preprint 2026",
                    year: 2026,
                    ccf: "non-ccf",
                    type: "preprint",
                    topics: ["image-retrieval", "biometrics", "geometry-registration"],
                    highlights: [],
                    title: "Toward the Whole Picture: Accumulative Fingerprint Mapping and Reconstruction for Small-Area Mobile Sensors",
                    authorsHtml: "<strong>Xiongjun Guan</strong>, Jianjiang Feng, Jie Zhou",
                    venue: "This work introduces an accumulative fingerprint mapping and reconstruction paradigm that fuses sequential partial fingerprint observations into a continuously refined global fingerprint state, enabling reliable one-shot matching and practical deployment for small-area mobile biometric systems.",
                    keywords: [
                        "Generative Reconstruction",
                        "Accumulative Mapping",
                        "Memory-Augmented Recognition",
                        "Structured Token Accumulation",
                        "One-Shot Matching"
                        
                    ],
                    links: [
                        { label: "Paper", href: "https://arxiv.org/abs/2606.15574" },
                        { label: "Code", href: "https://github.com/XiongjunGuan/FpReconstruction" }
                    ]
                },
                {
                    id: "paper-impose",
                    image: "images/IMPose.png",
                    alt: "Identity-Consistent Multi-Pose Generation of Contactless Fingerprints",
                    meta: "Preprint 2026",
                    year: 2026,
                    ccf: "non-ccf",
                    type: "preprint",
                    topics: ["image-retrieval", "biometrics", "pose-estimation", "geometry-registration"],
                    highlights: [],
                    title: "Identity-Consistent Multi-Pose Generation of Contactless Fingerprints",
                    authorsHtml: "Zhiyu Pan, <strong>Xiongjun Guan</strong>, Jianjiang Feng, Jie Zhou",
                    venue: "Identity-consistent multi-pose contactless fingerprint generation for cross-modal matching, combining latent diffusion, modality translation, and physics-based pose simulation.",
                    keywords: [
                        "Identity-Preserving Generation",
                        "Multi-Pose Synthesis",
                        "Diffusion-based Generation",
                        "Cross-Modal Data Engine",
                        "Physics-informed Simulation"
                    ],
                    links: [
                        { label: "Paper", href: "https://arxiv.org/abs/2605.03830" },
                        { label: "Code", href: "https://github.com/Yu-Yy/IMPOSE" }
                    ]
                },
                {
                    image: "images/tifs2025_FLARE.png",
                    alt: "Fixed-Length Dense Fingerprint Representation with Alignment and Robust Enhancement",
                    meta: "T-IFS 2026",
                    year: 2026,
                    ccf: "A",
                    type: "journal",
                    topics: ["image-retrieval", "biometrics", "geometry-registration"],
                    highlights: [{ className: "ccfa", text: "CCF-A" }],
                    title: "Fixed-Length Dense Fingerprint Representation with Alignment and Robust Enhancement",
                    authorsHtml: "Zhiyu Pan, <strong>Xiongjun Guan</strong>, Yongjie Duan, Jianjiang Feng, Jie Zhou",
                    venue: "Fixed-length dense representation and matching framework that couples local discriminability with pose-aware alignment and robustness enhancement.",
                    keywords: [
                        "Efficient Image Embedding",
                        "Dense Passage Retrieval",
                        "Representation Learning",
                        "Local Discriminability",
                        "Recognition with Spatial Priors"
                    ],
                    links: [
                        { label: "Paper", href: "https://arxiv.org/abs/2505.03597" },
                        { label: "Code", href: "https://github.com/Yu-Yy/FLARE" }
                    ]
                },
                {
                    image: "images/tbiom2025_dmd.png",
                    alt: "Minutiae-Anchored Local Dense Representation for Fingerprint Matching",
                    meta: "Preprint 2025",
                    year: 2025,
                    ccf: "non-ccf",
                    type: "preprint",
                    topics: ["image-retrieval", "biometrics", "geometry-registration"],
                    highlights: [],
                    title: "Minutiae-Anchored Local Dense Representation for Fingerprint Matching",
                    authorsHtml: "Zhiyu Pan, <strong>Xiongjun Guan</strong>, Yongjie Duan, Jianjiang Feng, Jie Zhou",
                    venue: "Local representation that fuses geometric anchors and contextual textures.",
                    keywords: [
                        "Image Segment Retrieval",
                        "Representation Learning",
                        "Anchor-based Attention",
                        "Geometry Constraint Matching"
                    ],
                    links: [
                        { label: "Paper", href: "https://arxiv.org/abs/2507.15297" },
                        { label: "Code", href: "https://github.com/Yu-Yy/DMD" }
                    ]
                },
                {
                    image: "images/tifs2025_DRACO.png",
                    alt: "Finger Pose Estimation for Under-screen Fingerprint Sensors",
                    meta: "T-IFS 2025",
                    year: 2025,
                    ccf: "A",
                    type: "journal",
                    topics: ["image-retrieval", "biometrics", "pose-estimation", "geometry-registration"],
                    highlights: [{ className: "ccfa", text: "CCF-A" }],
                    title: "Finger Pose Estimation for Under-screen Fingerprint Sensors",
                    authorsHtml: "<strong>Xiongjun Guan</strong>, Zhiyu Pan, Jianjiang Feng, Jie Zhou",
                    venue: "Rigid pose estimation via multi-modal fusion strategies and its application to retrieval.",
                    keywords: [
                        "Pose Estimation",
                        "Multi-Modal Fusion",
                        "Mixture of Experts",
                        "Knowledge Transfer",
                        "Decoupled Distribution Representation",
                        "Geometry Constraint Matching"
                    ],
                    links: [
                        { label: "Paper", href: "http://arxiv.org/abs/2505.02481" },
                        { label: "Code", href: "https://github.com/XiongjunGuan/DRACO" }
                    ]
                },
                {
                    id: "paper-joint-pose-verification",
                    image: "images/tifs2024_partial.png",
                    alt: "Joint Identity Verification and Pose Alignment for Partial Fingerprints",
                    meta: "T-IFS 2024",
                    year: 2024,
                    ccf: "A",
                    type: "journal",
                    topics: ["image-retrieval", "biometrics", "pose-estimation", "geometry-registration"],
                    highlights: [
                        { className: "ccfa", text: "CCF-A" },
                        { className: "featured", text: "Featured" }
                    ],
                    title: "Joint Identity Verification and Pose Alignment for Partial Fingerprints",
                    authorsHtml: "<strong>Xiongjun Guan</strong>, Zhiyu Pan, Jianjiang Feng, Jie Zhou",
                    venue: "CNN-ViT hybrid network for joint pose estimation and identity recognition in partial image scenarios.",
                    keywords: [
                        "Location & Verification",
                        "Multi-Task Collaboration",
                        "Image Segment Retrieval",
                        "Representation-Regularized Pre-Training"
                    ],
                    links: [
                        { label: "Paper", href: "https://arxiv.org/abs/2405.03959" },
                        { label: "Code", href: "https://github.com/XiongjunGuan/JIPNet" }
                    ]
                },
                {
                    image: "images/ijcb2024_descriptor.png",
                    alt: "Latent Fingerprint Matching via Dense Minutia Descriptor",
                    meta: "IJCB 2024",
                    year: 2024,
                    ccf: "C",
                    type: "conference",
                    topics: ["image-retrieval", "biometrics", "geometry-registration"],
                    highlights: [{ className: "ccfa", text: "CCF-C" }],
                    title: "Latent Fingerprint Matching via Dense Minutia Descriptor",
                    authorsHtml: "Zhiyu Pan, Yongjie Duan, <strong>Xiongjun Guan</strong>, Jianjiang Feng, Jie Zhou",
                    venue: "Dense anchor descriptors that enables stronger local correspondence modeling and more reliable matching.",
                    keywords: [
                        "Patch Embedding",
                        "Representation Learning",
                        "Anchor-based Attention",
                        "Geometry Constraint Matching"
                    ],
                    links: [
                        { label: "Paper", href: "https://arxiv.org/abs/2405.01199" },
                        { label: "Code", href: "https://github.com/Yu-Yy/DMD" }
                    ]
                },
                {
                    id: "paper-phase-registration",
                    image: "images/tifs2024_registration.png",
                    alt: "Phase-Aggregated Dual-Branch Network for Efficient Fingerprint Dense Registration",
                    meta: "T-IFS 2024",
                    year: 2024,
                    ccf: "A",
                    type: "journal",
                    topics: ["image-retrieval", "biometrics", "geometry-registration"],
                    highlights: [
                        { className: "ccfa", text: "CCF-A" },
                        { className: "featured", text: "Featured" }
                    ],
                    title: "Phase-Aggregated Dual-Branch Network for Efficient Fingerprint Dense Registration",
                    authorsHtml: "<strong>Xiongjun Guan</strong>, Jianjiang Feng, Jie Zhou",
                    venue: "Dual-branch dense registration paradigm that integrates precise geometric priors (phase) with robust deep representation.",
                    keywords: [
                        "Image Registration",
                        "Phase Unwrapping",
                        "Multi-Granularity Representation",
                        "Geometry Constraint Matching"
                    ],
                    links: [
                        { label: "Paper", href: "https://arxiv.org/abs/2404.17159" },
                        { label: "Code", href: "https://github.com/XiongjunGuan/PDRNet" }
                    ]
                },
                {
                    id: "paper-distortion-rectification",
                    image: "images/tifs2023_rectification.png",
                    alt: "Regression of Dense Distortion Field from a Single Fingerprint Image",
                    meta: "T-IFS 2023",
                    year: 2023,
                    ccf: "A",
                    type: "journal",
                    topics: ["image-retrieval", "biometrics", "geometry-registration"],
                    highlights: [{ className: "ccfa", text: "CCF-A" }],
                    title: "Regression of Dense Distortion Field from a Single Fingerprint Image",
                    authorsHtml: "<strong>Xiongjun Guan</strong>, Yongjie Duan, Jianjiang Feng, Jie Zhou",
                    venue: "End-to-end dense distortion field regression replacing previous low-dimensional assumptions with grid-level geometric correction.",
                    keywords: [
                        "Distortion Rectification",
                        "Multi-Semantic Optimization",
                        "Geometry Constraint Matching",
                        "Principal Component Analysis"
                    ],
                    links: [
                        { label: "Paper", href: "https://arxiv.org/abs/2404.17610" },
                        { label: "Code", href: "https://github.com/XiongjunGuan/DDRNet" }
                    ]
                },
                {
                    image: "images/ijcb2022_rectification.png",
                    alt: "Direct Regression of Distortion Field from a Single Fingerprint Image",
                    meta: "IJCB 2022",
                    year: 2022,
                    ccf: "C",
                    type: "conference",
                    topics: ["image-retrieval", "biometrics", "geometry-registration"],
                    highlights: [
                        { className: "ccfa", text: "CCF-C" },
                        { className: "oral", text: "Oral" }
                    ],
                    title: "Direct Regression of Distortion Field from a Single Fingerprint Image",
                    authorsHtml: "<strong>Xiongjun Guan</strong>, Yongjie Duan, Jianjiang Feng, Jie Zhou",
                    venue: "End-to-end dense distortion field regression replacing previous low-dimensional assumptions with grid-level geometric correction.",
                    keywords: [
                        "Distortion Rectification",
                        "Multi-Semantic Optimization",
                        "Geometry Constraint Matching",
                        "Principal Component Analysis"
                    ],
                    links: [
                        { label: "Paper", href: "https://arxiv.org/abs/2404.17148" },
                        { label: "Code", href: "https://github.com/XiongjunGuan/DDRNet" },
                        { label: "Slides", href: "docs/IJCB2022.pptx" }
                    ]
                }
            ]
        }
    ];

    function escapeHtml(value) {
        return String(value)
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#39;");
    }

    function localizeLinkLabel(label, lang) {
        if (lang !== "zh") {
            return label;
        }
        const map = {
            "Paper": "论文",
            "Code": "代码",
            "Slides": "幻灯片",
            "Challenge": "比赛",
            "Video": "视频"
        };
        return map[label] || label;
    }

    function renderPublicationLink(link, lang) {
        return `<a href="${escapeHtml(link.href)}">${escapeHtml(localizeLinkLabel(link.label, lang))}</a>`;
    }

    function localizeHighlightText(text, lang) {
        if (lang !== "zh") {
            return text;
        }
        const map = {
            "Featured": "精选",
            "Oral": "口头报告",
            "2nd Place": "第 2 名",
            "4th Place": "第 4 名"
        };
        return map[text] || text;
    }

    function renderPublicationHighlight(highlight, lang) {
        return `<span class="paper-highlight ${escapeHtml(highlight.className)}">${escapeHtml(localizeHighlightText(highlight.text, lang))}</span>`;
    }

    function renderPublicationKeyword(keyword) {
        return `<span class="paper-keyword">${escapeHtml(keyword)}</span>`;
    }

    function renderPublicationPaper(paper, lang) {
        return renderPublicationCard(paper, {}, lang);
    }

    function renderPublicationCard(paper, options, lang) {
        const cardClass = options.cardClass ? ` ${options.cardClass}` : "";
        const paperId = options.includeId && paper.id ? ` id="${escapeHtml(paper.id)}"` : "";
        const baseHighlights = options.prependedHighlights || [];
        const tailHighlights = options.appendedHighlights || [];
        const sourceHighlights = (paper.highlights || []).filter(function (highlight) {
            if (!options.excludeHighlightClasses || !options.excludeHighlightClasses.length) {
                return true;
            }
            return !options.excludeHighlightClasses.includes(highlight.className);
        });
        const mergedHighlights = baseHighlights.concat(sourceHighlights, tailHighlights);
        const highlightsHtml = mergedHighlights.map(function (highlight) {
            return renderPublicationHighlight(highlight, lang);
        }).join("");
        const keywords = typeof options.keywordLimit === "number" ? paper.keywords.slice(0, options.keywordLimit) : paper.keywords;
        const keywordsHtml = keywords.map(renderPublicationKeyword).join("");
        const linksHtml = paper.links.map(function (link) {
            return renderPublicationLink(link, lang);
        }).join("");
        const venueText = lang === "zh" && paper.venueZh ? paper.venueZh : (options.venueText || paper.venue);
        const metaText = lang === "zh" && paper.metaZh ? paper.metaZh : paper.meta;
        const toplineHtml = options.toplineHtml || `<span class="item-meta">${escapeHtml(metaText)}</span>`;

        return `
            <div class="paper-item${cardClass}"${paperId}>
                <button class="paper-thumb" type="button"
                    data-lightbox-src="${escapeHtml(paper.image)}"
                    data-lightbox-alt="${escapeHtml(paper.alt)}">
                    <img class="paper-cover" src="${escapeHtml(paper.image)}" alt="${escapeHtml(paper.alt)}">
                </button>
                <div>
                    <div class="paper-topline">
                        ${toplineHtml}
                        ${highlightsHtml}
                    </div>
                    <h3 class="paper-title">${escapeHtml(paper.title)}</h3>
                    <p class="paper-authors">${paper.authorsHtml}</p>
                    <p class="paper-venue">${escapeHtml(venueText)}</p>
                    <div class="paper-keywords">
                        ${keywordsHtml}
                    </div>
                    <div class="paper-links">
                        ${linksHtml}
                    </div>
                </div>
            </div>
        `;
    }

    const activeFilters = {
        featured: new Set(["featured"]),
        topics: new Set(),
        years: new Set(),
        ccf: new Set(),
        types: new Set()
    };
    let showAllPapers = false;

    const filterGroups = [
        {
            key: "featured",
            label: { en: "Featured", zh: "精选" },
            values: [{ value: "featured", label: { en: "Featured", zh: "精选" } }]
        },
        {
            key: "topics",
            label: { en: "Research Topics", zh: "研究方向" },
            values: [
                { value: "llm-foundation", label: { en: "LLMs & Foundation Models", zh: "大语言模型与基础模型" } },
                { value: "video-understanding", label: { en: "Video Understanding", zh: "视频理解" } },
                { value: "finger-hci", label: { en: "Finger-based HCI", zh: "基于手指的人机交互" } },
                { value: "image-retrieval", label: { en: "Image Retrieval", zh: "图像检索" } },
                { value: "biometrics", label: { en: "Biometrics & Fingerprint Recognition", zh: "生物特征与指纹识别" } },
                { value: "geometry-registration", label: { en: "Geometric Modeling & Registration", zh: "几何建模与配准" } },
                { value: "pose-estimation", label: { en: "Pose Estimation", zh: "姿态估计" } }
            ]
        },
        {
            key: "years",
            label: { en: "Year", zh: "年份" },
            values: [2026, 2025, 2024, 2023, 2022, 2021].map(function (year) {
                return { value: String(year), label: { en: String(year), zh: String(year) } };
            })
        },
        {
            key: "ccf",
            label: { en: "CCF", zh: "CCF" },
            values: [
                { value: "A", label: { en: "CCF-A", zh: "CCF-A" } },
                { value: "B", label: { en: "CCF-B", zh: "CCF-B" } },
                { value: "C", label: { en: "CCF-C", zh: "CCF-C" } },
                { value: "non-ccf", label: { en: "Non-CCF", zh: "非 CCF" } }
            ]
        },
        {
            key: "types",
            label: { en: "Publication Type", zh: "发表形态" },
            values: [
                { value: "conference", label: { en: "Conference", zh: "会议" } },
                { value: "journal", label: { en: "Journal", zh: "期刊" } },
                { value: "preprint", label: { en: "Preprint", zh: "预印本" } }
            ]
        }
    ];

    function getAllPapers() {
        return publicationGroups.flatMap(function (group) {
            return group.papers;
        });
    }

    function isFeatured(paper) {
        return featuredPaperIds.includes(paper.id);
    }

    function getFilterCount(groupKey, value, papers) {
        return papers.filter(function (paper) {
            if (groupKey === "featured") return isFeatured(paper);
            if (groupKey === "topics") return paper.topics.includes(value);
            if (groupKey === "years") return String(paper.year) === value;
            if (groupKey === "ccf") return paper.ccf === value;
            return paper.type === value;
        }).length;
    }

    function matchesFilterSet(paper, groupKey, selectedValues) {
        if (!selectedValues.size) return true;
        if (groupKey === "featured") return !selectedValues.has("featured") || isFeatured(paper);
        if (groupKey === "topics") return paper.topics.some(function (topic) { return selectedValues.has(topic); });
        if (groupKey === "years") return selectedValues.has(String(paper.year));
        if (groupKey === "ccf") return selectedValues.has(paper.ccf);
        return selectedValues.has(paper.type);
    }

    function getFilteredPapers(papers) {
        const hasActiveFilter = Object.keys(activeFilters).some(function (groupKey) {
            return activeFilters[groupKey].size > 0;
        });
        if (!showAllPapers && !hasActiveFilter) {
            return [];
        }
        const filtered = papers.filter(function (paper) {
            if (showAllPapers) return true;
            return Object.keys(activeFilters).every(function (groupKey) {
                return matchesFilterSet(paper, groupKey, activeFilters[groupKey]);
            });
        });
        const onlyFeaturedIsActive = activeFilters.featured.has("featured")
            && Object.keys(activeFilters).every(function (groupKey) {
                return groupKey === "featured" || !activeFilters[groupKey].size;
            });

        return filtered.sort(function (left, right) {
            if (onlyFeaturedIsActive) {
                return featuredPaperIds.indexOf(left.id) - featuredPaperIds.indexOf(right.id);
            }
            return right.year - left.year || left.title.localeCompare(right.title);
        });
    }

    function localizePublicationType(type, lang) {
        const labels = {
            conference: { en: "Conference", zh: "会议" },
            journal: { en: "Journal", zh: "期刊" },
            preprint: { en: "Preprint", zh: "预印本" }
        };
        return labels[type][lang];
    }

    function localizeCcf(ccf, lang) {
        return ccf === "non-ccf" ? (lang === "zh" ? "非 CCF" : "Non-CCF") : `CCF-${ccf}`;
    }

    function renderPublicationFilterGroup(group, papers, lang) {
        const buttons = group.values.map(function (item) {
            return renderPublicationFilterButton(group.key, item, papers, lang);
        }).join("");
        return `<div class="pub-filter-group"><p class="pub-filter-label">${escapeHtml(group.label[lang])}</p><div class="pub-filter-chips">${buttons}</div></div>`;
    }

    function renderPublicationFilterButton(groupKey, item, papers, lang) {
        const isActive = activeFilters[groupKey].has(item.value);
        const count = getFilterCount(groupKey, item.value, papers);
        return `<button class="pub-filter-chip${isActive ? " active" : ""}" type="button"
            data-filter-group="${escapeHtml(groupKey)}" data-filter-value="${escapeHtml(item.value)}"
            aria-pressed="${isActive}">${escapeHtml(item.label[lang])} <span>(${count})</span></button>`;
    }

    function renderActiveFilterSummary(lang) {
        const activeGroups = filterGroups.map(function (group) {
            const items = group.values.filter(function (item) {
                return activeFilters[group.key].has(item.value);
            });
            return { group: group, items: items };
        }).filter(function (entry) {
            return entry.items.length > 0;
        });

        if (!activeGroups.length) return "";
        const label = lang === "zh" ? "当前筛选" : "Current filters";
        const groupsHtml = activeGroups.map(function (entry) {
            const itemHtml = entry.items.map(function (item, index) {
                const operator = index ? `<span class="pub-filter-operator">${lang === "zh" ? "或" : "OR"}</span>` : "";
                return `${operator}<button class="pub-active-filter" type="button" data-filter-group="${escapeHtml(entry.group.key)}"
                    data-filter-value="${escapeHtml(item.value)}" aria-label="Remove ${escapeHtml(item.label[lang])} filter">
                    ${escapeHtml(item.label[lang])}<span aria-hidden="true">×</span>
                </button>`;
            }).join("");
            return `<span class="pub-active-filter-group"><span class="pub-active-filter-group-label">${escapeHtml(entry.group.label[lang])}:</span>${itemHtml}</span>`;
        }).join(`<span class="pub-filter-operator pub-filter-operator-and">${lang === "zh" ? "且" : "AND"}</span>`);
        return `<span class="pub-filter-summary-label">${escapeHtml(label)}:</span><span class="pub-active-filters">${groupsHtml}</span>`;
    }

    function renderPublicationCardTags(paper, lang) {
        return [
            `<span class="paper-filter-tag">${paper.year}</span>`,
            `<span class="paper-filter-tag">${escapeHtml(localizePublicationType(paper.type, lang))}</span>`,
            `<span class="paper-filter-tag">${escapeHtml(localizeCcf(paper.ccf, lang))}</span>`
        ].join("");
    }

    function renderFilteredPublicationCard(paper, lang) {
        return renderPublicationCard(paper, {
            includeId: true,
            prependedHighlights: [],
            excludeHighlightClasses: ["ccfa", "featured"],
            toplineHtml: renderPublicationCardTags(paper, lang)
        }, lang);
    }

    function renderPublications(container, lang) {
        const papers = getAllPapers();
        const filteredPapers = getFilteredPapers(papers);
        const featuredGroup = filterGroups[0];
        const featuredHtml = renderPublicationFilterButton(featuredGroup.key, featuredGroup.values[0], papers, lang);
        const filtersHtml = filterGroups.slice(1).map(function (group) {
            return renderPublicationFilterGroup(group, papers, lang);
        }).join("");
        const papersHtml = filteredPapers.map(function (paper) {
            return renderFilteredPublicationCard(paper, lang);
        }).join("");
        const allLabel = lang === "zh" ? "显示全部论文" : "Show all papers";
        const clearLabel = lang === "zh" ? "清除全部筛选" : "Clear all filters";
        const hasActiveFilter = showAllPapers || Object.keys(activeFilters).some(function (groupKey) {
            return activeFilters[groupKey].size > 0;
        });
        const emptyLabel = hasActiveFilter
            ? (lang === "zh" ? "没有符合当前筛选条件的论文。" : "No publications match the current filters.")
            : (lang === "zh" ? "请选择至少一个标签，或点击“显示全部论文”。" : "Select at least one tag, or choose Show all papers.");

        container.innerHTML = `
            <div class="pub-filter-panel">
                <div class="pub-filter-toolbar">
                    <div class="pub-filter-featured">${featuredHtml}</div>
                    <div class="pub-filter-actions">
                        <button class="pub-filter-clear" type="button" data-show-all-publications>${escapeHtml(allLabel)}</button>
                        <button class="pub-filter-clear" type="button" data-clear-publication-filters>${escapeHtml(clearLabel)}</button>
                    </div>
                </div>
                ${filtersHtml}
            </div>
            <div class="pub-filter-result" aria-live="polite">
                <span class="pub-filter-result-count">${filteredPapers.length} ${lang === "zh" ? "篇论文" : filteredPapers.length === 1 ? "publication" : "publications"}</span>
                ${renderActiveFilterSummary(lang)}
            </div>
            <div class="paper-list pub-filtered-list">
                ${papersHtml || `<p class="pub-filter-empty">${escapeHtml(emptyLabel)}</p>`}
            </div>
        `;

        container.querySelectorAll("[data-filter-group]").forEach(function (button) {
            button.addEventListener("click", function () {
                const groupKey = button.getAttribute("data-filter-group");
                const value = button.getAttribute("data-filter-value");
                const selections = activeFilters[groupKey];
                showAllPapers = false;
                selections.has(value) ? selections.delete(value) : selections.add(value);
                renderPublications(container, lang);
                document.dispatchEvent(new CustomEvent("publications:rendered"));
            });
        });
        container.querySelector("[data-show-all-publications]").addEventListener("click", function () {
            Object.keys(activeFilters).forEach(function (key) { activeFilters[key].clear(); });
            showAllPapers = true;
            renderPublications(container, lang);
            document.dispatchEvent(new CustomEvent("publications:rendered"));
        });
        container.querySelector("[data-clear-publication-filters]").addEventListener("click", function () {
            Object.keys(activeFilters).forEach(function (key) { activeFilters[key].clear(); });
            showAllPapers = false;
            renderPublications(container, lang);
            document.dispatchEvent(new CustomEvent("publications:rendered"));
        });
    }

    window.initializePublications = function (lang) {
        const publicationsContent = document.getElementById("publications-content");
        if (!publicationsContent) return;
        renderPublications(publicationsContent, lang || "en");
    };
}());
