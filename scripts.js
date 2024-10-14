document.addEventListener('DOMContentLoaded', function() {
    const timelineData = [
        {
            date: '08/2021 - Present',
            title: 'IT Consultant',
            description: 'System Hardening: Periodically update and install patches with `windows update` for Windows system, and `apt` i.e. Ubuntu/Debian systems. Network Security: Configure pfSense firewalls, establish network rules with iptables, configure SecurityOnion, `pcap` analysis with Wireshark to safeguard networks and attached assets. Cloud Services: Implement AWS services such as CloudWatch, Route 53, and S3 buckets to manage, monitor, and secure scalable application solutions.'
        },
        {
            date: '11/2018 - 04/2019',
            title: 'Brand Manager',
            description: 'Strategic Innovation: Led initiatives to foster innovation across Industrial platforms, aligning with corporate strategies and stakeholder needs for strategic ideation and commercialization. Financial Management: Drove the financial performance of a $90MM portfolio with data-driven strategies. Strategy: Utilized Power BI to analyze consumer behavior and sales trends.'
        },
        {
            date: '11/2015 - 10/2018',
            title: 'Product Manager',
            description: 'Product Management: Managed the P&L for a product portfolio with 225 SKUs, driving the $30MM revenue every year. Developed communication materials to educate customers and sales team. Customer Engagement: Visited customers\' facilities for product presentations and collected market data.'
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

