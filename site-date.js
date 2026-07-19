(function (window) {
    "use strict";

    // Update this one date to refresh the footer on both bilingual pages.
    const lastUpdated = Object.freeze({
        year: 2026,
        month: 7,
        day: 19
    });

    const englishMonths = Object.freeze([
        "Jan.", "Feb.", "Mar.", "Apr.", "May", "Jun.",
        "Jul.", "Aug.", "Sep.", "Oct.", "Nov.", "Dec."
    ]);

    function formatLastUpdated(lang) {
        const { year, month, day } = lastUpdated;

        if (lang === "zh") {
            return `${year} 年 ${month} 月 ${day} 日`;
        }

        return `${englishMonths[month - 1]} ${day}, ${year}`;
    }

    window.siteDate = Object.freeze({
        lastUpdated: lastUpdated,
        formatLastUpdated: formatLastUpdated
    });
})(window);
