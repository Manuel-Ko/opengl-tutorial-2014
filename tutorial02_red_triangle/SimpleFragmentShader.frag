#version 330 core

in vec3 vertexColor_vert;

// Ouput data
out vec3 color;

void main()
{

	// Output color = red 
        color = vertexColor_vert;

}
