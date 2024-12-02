document.addEventListener('DOMContentLoaded', function() {
    // Skills Section: Expand/Collapse Descriptions
    const skillTitles = document.querySelectorAll('.skills-title');

    skillTitles.forEach(title => {
        title.addEventListener('click', function() {
            const description = this.nextElementSibling; // Get the associated description
            description.style.display = description.style.display === 'none' ? 'block' : 'none'; // Toggle visibility
        });
    });

    // Experience Section: Populate Timeline
    const timelineData = [
        {
            date: '05/2022 - 10/2024',
            title: 'Jr. Cloud Engineer',
            company: 'Miranda Healthcare',
            location: 'Flossmoor, IL, USA',
            description: `
                <ul>
                    <li>Designed and deployed full-stack lead/recruitment application leveraging EC2, RDS, S3, Lambda, DynamoDB, and Amplify.</li>
                    <li>Delivered secure remote desktop solutions using WorkSpaces, WorkLink, IAM, S3, and Amplify.</li>
                    <li>Designed an analytics pipeline using Redshift, QuickSight, Glue, and Data Pipeline for real-time staffing metrics.</li>
                    <li>Managed IaC leveraging Terraform and automated deployment/testing with Jenkins or GitHub Actions.</li>
                    <li>Developed a project management platform utilizing WorkDocs, WorkMail, DynamoDB, AppStream, and SNS.</li>
                    <li>Utilized CloudWatch for monitoring VPC resources and Grafana for performance dashboards.</li>
                </ul>
            `
        },
        {
            date: '12/2019 - 04/2022',
            title: 'IT Project Manager',
            company: 'Minor-Morris Ltd.',
            location: 'Joliet, IL, USA',
            description: `
                <ul>
                    <li>Developed a detailed 2-year cloud migration roadmap for all service areas.</li>
                    <li>Worked with APN solution architects to design cloud architecture while maintaining compliance.</li>
                    <li>Provided guidance on leveraging AWS services like EC2, EKS, S3, RDS, and Lambda.</li>
                    <li>Migrated legacy systems to Kubernetes-managed Dockerized microservices.</li>
                    <li>Implemented IoT-enabled vehicle tracking tools using AWS IoT Core and S3.</li>
                    <li>Ensured compliance with AWS IAM, KMS, and CloudTrail for secure role-based access control.</li>
                </ul>
            `
        },
        {
            date: '11/2018 - 12/2019',
            title: 'Brand Manager',
            company: 'Rust-Oleum',
            location: 'Vernon Hills, IL, USA',
            description: `
                <ul>
                    <li>Led initiatives to foster innovation across industrial platforms using Agile methodologies.</li>
                    <li>Drove financial performance of a $90MM portfolio using data-driven strategies.</li>
                    <li>Analyzed consumer behavior with Power BI, transforming data into actionable insights.</li>
                </ul>
            `
        },
        {
            date: '11/2015 - 10/2018',
            title: 'Technical Product Manager',
            company: 'Fuchs',
            location: 'Harvey, IL, USA',
            description: `
                <ul>
                    <li>Managed P&L for a 225-SKU product portfolio generating $30MM annual revenue.</li>
                    <li>Developed communication materials to educate customers and sales teams.</li>
                    <li>Visited customer facilities for product presentations and market data collection.</li>
                </ul>
            `
        }
    ];

    const timeline = document.getElementById('timeline');

    timelineData.forEach((item, index) => {
        const entry = document.createElement('div');
        entry.classList.add('timeline-entry');
        entry.setAttribute('id', 'entry-' + index);

        const dot = document.createElement('div');
        dot.classList.add('timeline-dot');

        const date = document.createElement('div');
        date.textContent = item.date;
        date.classList.add('timeline-date');

        const content = document.createElement('div');
        content.classList.add('timeline-content');
        content.setAttribute('id', 'content-' + index);

        const title = document.createElement('h3');
        title.textContent = item.title;

        const company = document.createElement('h4');
        company.textContent = item.company;
        company.classList.add('company-name');

        const location = document.createElement('h4');
        location.textContent = item.location;
        location.classList.add('location');

        const description = document.createElement('div');
        description.innerHTML = item.description;
        description.style.display = 'none';

        entry.addEventListener('click', function() {
            description.style.display = description.style.display === 'none' ? 'block' : 'none';
        });

        content.appendChild(title);
        content.appendChild(company);
        content.appendChild(location);
        content.appendChild(description);

        entry.appendChild(dot);
        entry.appendChild(date);
        entry.appendChild(content);

        timeline.appendChild(entry);
    });
});

