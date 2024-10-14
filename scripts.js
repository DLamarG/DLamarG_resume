document.addEventListener('DOMContentLoaded', function() {
    const timelineData = [
        {
            date: '08/2021 - Present',
            title: 'IT Consultant',
            company: 'Code-Fit',
            location: 'Flossmoor, IL, USA',
            description: `
                <ul>
                    <li><strong>System Hardening:</strong> Periodically update and install patches with \`windows update\` for Windows systems and \`apt\` for Ubuntu/Debian systems.</li>
                    <li><strong>Network Security:</strong> Configure pfSense firewalls, establish network rules with iptables, configure SecurityOnion, and perform \`pcap\` analysis with Wireshark to safeguard networks and attached assets.</li>
                    <li><strong>Cloud Services:</strong> Implement AWS services such as CloudWatch, Route 53, and S3 buckets to manage, monitor, and secure scalable application solutions.</li>
                </ul>
            `
        },
        {
            date: '11/2018 - 04/2019',
            title: 'Brand Manager',
            company: 'Rust-Oleum',
            location: 'Vernon Hills, IL, USA',
            description: `
                <ul>
                    <li><strong>Strategic Innovation:</strong> Led initiatives to foster innovation across Industrial platforms, aligning with corporate strategies and stakeholder needs for strategic ideation and commercialization, utilizing the latest communication tools, Adobe Suite, Canva, and DAX.</li>
                    <li><strong>Financial Management:</strong> Drove the financial performance of a $90MM portfolio with data-driven strategies, utilizing multiple CRM tools (e.g., SAP, Salesforce Reports, Salesforce Dashboard, DAX).</li>
                    <li><strong>Strategy:</strong> Utilized Power BI to analyze consumer behavior and sales trends from consumer reports, transforming raw data into actionable insights for strategic direction.</li>
                </ul>
            `
        },
        {
            date: '11/2015 - 10/2018',
            title: 'Product Manager',
            company: 'Fuchs',
            location: 'Harvey, IL, USA',
            description: `
                <ul>
                    <li><strong>Product Management:</strong> Managed the P&L for a product portfolio with 225 SKUs, driving $30MM revenue every year using analytical tools (e.g., ATD, SAP, Salesforce Analytics).</li>
                    <li><strong>Communication Materials:</strong> Developed communication materials to educate customers and sales teams on the value-add positioning for the 225 SKUs in the Industrial portfolio.</li>
                    <li><strong>Sales Tools Update:</strong> Updated sales tools with the latest communication technologies (e.g., Adobe Suite, Canva).</li>
                    <li><strong>Customer Engagement:</strong> Visited customer facilities for product presentations and collected relevant market data (Travel 25-30%).</li>
                </ul>
            `
        }
    ];

    const timeline = document.getElementById('timeline');

    timelineData.forEach((item, index) => {
        let entry = document.createElement('div');
        entry.classList.add('timeline-entry');
        entry.setAttribute('id', 'entry-' + index);

        let dot = document.createElement('div');
        dot.classList.add('timeline-dot');

        let date = document.createElement('div');
        date.textContent = item.date;
        date.classList.add('timeline-date');

        let content = document.createElement('div');
        content.classList.add('timeline-content');
        content.setAttribute('id', 'content-' + index);

        let title = document.createElement('h3');
        title.textContent = item.title;

        let description = document.createElement('p');
        description.textContent = item.description;
        description.style.display = 'none'; // Initially hide the description

        // Click event to toggle the description visibility
        entry.addEventListener('click', function() {
            description.style.display = description.style.display === 'none' ? 'block' : 'none';
        });

        content.appendChild(title);
        content.appendChild(description);

        entry.appendChild(dot);
        entry.appendChild(date);
        entry.appendChild(content);

        timeline.appendChild(entry);
    });
});

