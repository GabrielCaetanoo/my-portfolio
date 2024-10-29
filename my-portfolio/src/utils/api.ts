export const fetchProjects = async () => {
    const response = await fetch('https://api.github.com/users/GabrielCaetanoo/repos');
    return response.json();
};
