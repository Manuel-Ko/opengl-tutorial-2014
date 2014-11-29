# CMake entry point
cmake_minimum_required (VERSION 2.6)
project (TestArea)

add_executable(TestArea 
        main.cpp
        ../common/shader.cpp
        ../common/shader.hpp
)
target_link_libraries(TestArea
	${ALL_LIBS}
)


 
