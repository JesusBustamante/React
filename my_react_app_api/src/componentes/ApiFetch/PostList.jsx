import { useFetch } from "../ApiFetch/ApiFetch";

export const PostList = () => {
    // 1. Llama al hook con la URL de la API
    const { data, isLoading, error } = useFetch('https://jsonplaceholder.typicode.com/users/');

    // 2. Maneja el estado de carga
    if (isLoading) {
        return <div>Cargando posts...</div>;
    }

    // 3. Maneja el estado de error
    if (error) {
        return <div>Error al cargar los datos: {error.message}</div>;
    }

    // 4. Muestra los datos cuando la petición es exitosa
    return (
        <div>
            <h1>Lista de Posts</h1>
            <ul>
                {data && data.map(post => (
                    <li key={post.id}>{post.name}</li>
                ))}
            </ul>
        </div>
    );
};