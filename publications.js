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
            quickIconClass: "mllm",
            title: "MLLMs & Video Understanding",
            subtitle: "Works on multi-modal large models, post-training, agentic workflow, and harness engineering.",
            papers: [
                {
                    id: "paper-mer25",
                    image: "images/mm2025_mer_track1.png",
                    alt: "More is Better: A Moe-based Emotion Recognition Framework with Human Preference Alignment",
                    meta: "ACM MM 2025",
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
                    meta: "ACM MM 2025",
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
                    meta: "CVPR 2025",
                    highlights: [{ className: "rank", text: "2nd Place" }],
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
                    meta: "CVPR 2025",
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
            quickIconClass: "hci",
            title: "Finger-based HCI",
            subtitle: "Works on finger-based human-computer interaction, pose estimation, and sensing.",
            papers: [
                {
                    id: "paper-bifingerpose",
                    image: "images/tmc2025_BiFingerPose.png",
                    alt: "BiFingerPose: Bimodal Finger Pose Estimation for Touch Devices",
                    meta: "T-MC 2025",
                    highlights: [{ className: "ccfa", text: "CCF-A" }],
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
                        { label: "Slides", href: "docs/CCBR2021.pptx" }
                    ]
                }
            ]
        },
        {
            id: "pub-bio",
            quickLabel: "Image Retrieval",
            quickIconClass: "bio",
            title: "Image Retrieval",
            subtitle: "Works on large-scale image retrieval with efficient representation and geometric normalization.",
            papers: [
                {
                    image: "images/tifs2025_FLARE.png",
                    alt: "Fixed-Length Dense Fingerprint Representation with Alignment and Robust Enhancement",
                    meta: "T-IFS 2026",
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
                    highlights: [{ className: "ccfa", text: "CCF-A" }],
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
                    highlights: [{ className: "ccfa", text: "CCF-A" }],
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

    function renderPublicationLink(link) {
        return `<a href="${escapeHtml(link.href)}">${escapeHtml(link.label)}</a>`;
    }

    function renderPublicationHighlight(highlight) {
        return `<span class="paper-highlight ${escapeHtml(highlight.className)}">${escapeHtml(highlight.text)}</span>`;
    }

    function renderPublicationKeyword(keyword) {
        return `<span class="paper-keyword">${escapeHtml(keyword)}</span>`;
    }

    function renderPublicationPaper(paper) {
        return renderPublicationCard(paper, {});
    }

    function renderPublicationCard(paper, options) {
        const cardClass = options.cardClass ? ` ${options.cardClass}` : "";
        const paperId = options.includeId && paper.id ? ` id="${escapeHtml(paper.id)}"` : "";
        const baseHighlights = options.prependedHighlights || [];
        const mergedHighlights = baseHighlights.concat(paper.highlights || []);
        const highlightsHtml = mergedHighlights.map(renderPublicationHighlight).join("");
        const keywords = typeof options.keywordLimit === "number" ? paper.keywords.slice(0, options.keywordLimit) : paper.keywords;
        const keywordsHtml = keywords.map(renderPublicationKeyword).join("");
        const linksHtml = paper.links.map(renderPublicationLink).join("");
        const venueText = options.venueText || paper.venue;

        return `
            <div class="paper-item${cardClass}"${paperId}>
                <button class="paper-thumb" type="button"
                    data-lightbox-src="${escapeHtml(paper.image)}"
                    data-lightbox-alt="${escapeHtml(paper.alt)}">
                    <img class="paper-cover" src="${escapeHtml(paper.image)}" alt="${escapeHtml(paper.alt)}">
                </button>
                <div>
                    <div class="paper-topline">
                        <span class="item-meta">${escapeHtml(paper.meta)}</span>
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

    function getPaperById(paperId) {
        for (const group of publicationGroups) {
            const matched = group.papers.find(function (paper) {
                return paper.id === paperId;
            });
            if (matched) {
                return matched;
            }
        }
        return null;
    }

    function renderFeaturedPublications() {
        const featuredPapersHtml = featuredPaperIds.map(function (paperId) {
            const paper = getPaperById(paperId);
            if (!paper) {
                return "";
            }
            return renderPublicationCard(paper, {
                includeId: false,
                prependedHighlights: [{ className: "note", text: "Featured" }]
            });
        }).join("");

        return `
            <div class="paper-group" id="pub-featured">
                <details open>
                    <summary>
                        <div class="paper-group-header">
                            <div>
                                <h3 class="paper-group-title">Featured Papers</h3>
                                <p class="paper-group-subtitle">A few selected works.</p>
                            </div>
                            <span class="paper-group-toggle" aria-hidden="true">
                                <svg viewBox="0 0 24 24" focusable="false">
                                    <path d="M9.29 6.71a1 1 0 0 1 1.42 0l5 5a1 1 0 0 1 0 1.42l-5 5a1 1 0 1 1-1.42-1.42L13.59 12 9.29 7.71a1 1 0 0 1 0-1.42Z" />
                                </svg>
                            </span>
                        </div>
                    </summary>
                    <div class="paper-group-body">
                        <div class="paper-list">
                            ${featuredPapersHtml}
                        </div>
                    </div>
                </details>
            </div>
        `;
    }

    function renderPublicationGroup(group) {
        const papersHtml = group.papers.map(renderPublicationPaper).join("");
        const paperCount = group.papers.length;

        return `
            <div class="paper-group" id="${escapeHtml(group.id)}">
                <details>
                    <summary>
                        <div class="paper-group-header">
                            <div>
                                <div class="paper-group-title-row">
                                    <h3 class="paper-group-title">${escapeHtml(group.title)}</h3>
                                    <span class="paper-group-count">${paperCount}</span>
                                </div>
                                <p class="paper-group-subtitle">${escapeHtml(group.subtitle)}</p>
                            </div>
                            <span class="paper-group-toggle" aria-hidden="true">
                                <svg viewBox="0 0 24 24" focusable="false">
                                    <path d="M9.29 6.71a1 1 0 0 1 1.42 0l5 5a1 1 0 0 1 0 1.42l-5 5a1 1 0 1 1-1.42-1.42L13.59 12 9.29 7.71a1 1 0 0 1 0-1.42Z" />
                                </svg>
                            </span>
                        </div>
                    </summary>
                    <div class="paper-group-body">
                        <div class="paper-list">
                            ${papersHtml}
                        </div>
                    </div>
                </details>
            </div>
        `;
    }

    function renderPublications(groups, container) {
        const quickNavHtml = groups.map(function (group) {
            return `
                <a href="#${escapeHtml(group.id)}">
                    <span class="pub-quick-icon ${escapeHtml(group.quickIconClass)}" aria-hidden="true"></span>
                    <span>${escapeHtml(group.quickLabel)}</span>
                </a>
            `;
        }).join("");

        const groupsHtml = groups.map(renderPublicationGroup).join("");
        const featuredHtml = renderFeaturedPublications();

        container.innerHTML = `
            <div class="pub-quick-nav">
                ${quickNavHtml}
            </div>
            ${featuredHtml}
            ${groupsHtml}
        `;
    }

    window.initializePublications = function () {
        const publicationsContent = document.getElementById("publications-content");
        if (!publicationsContent) {
            return;
        }
        renderPublications(publicationGroups, publicationsContent);
    };
}());
