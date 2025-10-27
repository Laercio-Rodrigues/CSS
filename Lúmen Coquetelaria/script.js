// 1. Funcionalidade do Menu Responsivo
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const navbar = document.querySelector('.navbar');

    menuToggle.addEventListener('click', () => {
        // Alterna a classe 'active' na navegação
        navbar.classList.toggle('active');
        // Você pode alterar o ícone aqui se quiser (☰ para X)
        if (navbar.classList.contains('active')) {
            menuToggle.innerHTML = '✕'; 
        } else {
            menuToggle.innerHTML = '☰';
        }
    });

    // Fechar o menu ao clicar em um link (útil para links âncora)
    document.querySelectorAll('.navbar a').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                navbar.classList.remove('active');
                menuToggle.innerHTML = '☰';
            }
        });
    });
});

// 2. Funcionalidade de Detalhes dos Drinks (Exemplo com Modal/Alerta)
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.btn-detalhes').forEach(button => {
        button.addEventListener('click', (event) => {
            const drinkId = event.target.getAttribute('data-drink-id');
            
            // Em um site real, você carregaria os detalhes de um objeto/API
            let detalhes = "";
            switch(drinkId) {
                case 'drink1':
                    detalhes = "Nome do Drink 1\nIngredientes: 50ml Gin, 20ml Limão Siciliano, 15ml Xarope de Gengibre.\nPreparo: Bater na coqueteleira e servir em taça coupette.";
                    break;
                // Adicione mais casos conforme seus drinks
                default:
                    detalhes = "Detalhes não disponíveis.";
            }

            alert(detalhes); 

            // *Sugestão avançada:* Usar um modal (pop-up) com mais informações seria melhor que 'alert()'.
            // Você precisaria adicionar a estrutura do modal no HTML e estilizá-la no CSS.
        });
    });
});

// 3. Funcionalidade do Formulário de Contato (Exemplo Básico)
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Impede o envio padrão do formulário (recarregar a página)
            
            // Aqui você faria o envio dos dados (ex: usando Fetch API para um backend ou serviço de formulário)
            
            alert('Mensagem enviada com sucesso! Em breve entraremos em contato.');
            contactForm.reset(); // Limpa o formulário após o envio
        });
    }
});