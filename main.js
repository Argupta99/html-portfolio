//-------------light mode and dark mode-------//
if (localStorage.theme === 'dark' || (! ('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches))
{
    document.documentElement.classList.add('dark')
}else
{
    document.documentElement.classList.remove('dark')
}


  function toggleTheme () {
if (document.documentElement.classList.contains('dark')) 
{
    localStorage.theme = 'dark';
}

else {
    localStorage.theme = 'light';
}
  }