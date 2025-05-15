
function showTab(tabId) {
  document.querySelectorAll('.tab-content').forEach(function(content) {
    content.classList.remove('active');
  });
  document.getElementById(tabId).classList.add('active');
}
// Initialize the first tab
document.addEventListener('DOMContentLoaded', () => {
  showTab('home');
});
