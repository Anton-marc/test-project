import 'normalize.css';
import './style.scss'
import './contact/st.scss'
import './index.html'
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('buttonfade').addEventListener('click', function() {
        var svgContainer = document.getElementById('rotate');
        var blockfade = document.getElementById('blockfade');
        blockfade.classList.toggle('fade-out');
        setTimeout(function() {
            blockfade.classList.toggle('hidden');
            blockfade.classList.toggle('fade-out');
            var button = document.getElementById('buttonfade');
            button.textContent = (blockfade.classList.contains('hidden')) ? 'Hide Info' : 'More Info';
            svgContainer.style.transform = (svgContainer.style.transform === 'rotate(180deg)') ? 'rotate(0deg)' : 'rotate(180deg)';
        }, 500);
    });
});
