const pages = {
    overview: `
        <div class="main-wrapper">
            <h1>Welcome back, Demo User</h1>
            <p style="color: #666; margin-bottom: 30px;">
                Manage your profile settings and account preferences. 
                Your data is securely stored in your browser's localStorage.
            </p>
            
            <div class="card-grid">
                ${[
                    { title: 'Theme', desc: 'Dark/Light mode persisted', width: '100%' },
                    { title: 'Authentication', desc: 'Secure session stored', width: '100%' },
                    { title: 'Profile', desc: '20% profile completed (1/5)', width: '20%' },
                    { title: 'Security', desc: 'Password protection', width: '100%' }
                ].map(item => `
                    <div class="card">
                        <h3>${item.title}</h3>
                        <p style="font-size: 12px; color: #555;">${item.desc}</p>
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: ${item.width};"></div>
                        </div>
                    </div>
                `).join('')}
            </div>

            <h2 style="margin-bottom: 10px;">Quick Actions</h2>
            <div class="action-grid">
                <a href="#" class="action-card" data-target="profile" style="text-decoration: none; color: inherit; display: block;">
                    <h3>Edit Profile</h3>
                    <p>Update your personal information</p>
                </a>
                <a href="#" class="action-card" data-target="security" style="text-decoration: none; color: inherit; display: block;">
                    <h3>Change Password</h3>
                    <p>Update your Account security</p>
                </a>
            </div>
        </div>
    `,
    security: `<div class="main-wrapper"><h1>Security</h1><p>Manage your password and account protection settings.</p></div>`,
    notification: `<div class="main-wrapper"><h1>Notifications</h1><p>Configure how you receive alerts and updates.</p></div>`,
    help: `<div class="main-wrapper"><h1>Help & Support</h1><p>Find FAQs, contact support, or troubleshoot issues.</p></div>`
    
};

const navItems = document.querySelectorAll('.nav-item');
const contentArea = document.getElementById('content-area');


function updateContent(target) {
    
    if (target === 'signout') {
        window.location.href = '../LoginPage/index.html';
        return; 
    }

    contentArea.innerHTML = pages[target] || "<h1>Coming Soon</h1>";
    

    navItems.forEach(i => i.classList.remove('active'));
    const activeSidebar = document.querySelector(`.nav-item[data-target="${target}"]`);
    if (activeSidebar) activeSidebar.classList.add('active');
}

updateContent('overview');

document.addEventListener('click', (e) => {
    const targetElement = e.target.closest('[data-target]');
    if (!targetElement) return;

    const target = targetElement.getAttribute('data-target');

    
    if (target === 'profile') {
        return; 
    }

    e.preventDefault();
    updateContent(target);
});
