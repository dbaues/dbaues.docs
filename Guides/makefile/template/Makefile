# TEMPLATE FOR A SIMPLE MAKEFILE
# Dan Bauer - 2022

SRC_DIR		:= src					# Main source code directory
INC_DIR		:= ${SRC_DIR}/include	# Directory of project header files if using that architecture
OBJ_DIR		:= ${SRC_DIR}/obj		# Directory to store *.o files after compilation

CC			:= g++					# Compiler
CFLAGS		:= -I${INCLUDE_DIR}		# Directory of header files to be included plus the c flag -I

_OBJS	 	:= main.o bst.obj						 # List of created object files
OBJS		:= ${patsubst %, ${OBJ_DIR}/%, ${_OBJS}} # Generics for file names

# Usage:
# make				# Compiles the binary
# make clean		# Removes any *.o files and the Binary
.PHONY: clean all

all: BST

# Removes the old files.
clean:
	rm ${OBJS} BST

# Creates the object files.
${OBJ_DIR}/%.o: ${SRC_DIR}/%.cpp
	${CC} -c -o $@ $< ${CFLAGS}

# Creates the executable.
BST: ${OBJS}
	${CC} -o $@ $^ ${CFLAGS}
