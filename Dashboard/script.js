document.addEventListener('DOMContentLoaded', () => {
    
    const navItems = document.querySelectorAll('.nav-item[data-target]');
    const pageSections = document.querySelectorAll('.page-section');
    const actionCards = document.querySelectorAll('.action-card[data-target]');
    const signoutBtn = document.getElementById('btn-signout');
    const forms = document.querySelectorAll('form');

    const navigateTo = (targetId) => {
        
        pageSections.forEach(section => {
            section.classList.add('hidden');
            section.classList.remove('active-section');
        });

        
        navItems.forEach(item => {
            item.classList.remove('active');
        });

        
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.classList.remove('hidden');
            targetSection.classList.add('active-section');
        }

        
        const activeNavItem = document.querySelector(`.nav-item[data-target="${targetId}"]`);
        if (activeNavItem) {
            activeNavItem.classList.add('active');
        }
    };

    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            const targetId = item.getAttribute('data-target');
            navigateTo(targetId);
        });
    });

   
    actionCards.forEach(card => {
        card.addEventListener('click', () => {
            const targetId = card.getAttribute('data-target');
            navigateTo(targetId);
        });
    });


    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault(); 
            
            
            alert('Form submitted successfully! (This is a demo)');
        });
    });

  if (signoutBtn) {
        signoutBtn.addEventListener('click', () => {
            const userWantsToSignOut = confirm("Are you sure you want to sign out?");
            
           
            if (userWantsToSignOut) {
                
                 localStorage.clear(); 
                
                
                window.location.href = '../LoginPage/index.html';
            }
            
        });
    }
});