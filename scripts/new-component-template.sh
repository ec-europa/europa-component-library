#!/bin/bash

templates=(react, vanilla, specs);
template=$1
system=$2
component=$3
base_path="../src/systems/$system/implementations/$template/packages/"
message="The template seems to exists already, please check that before running this script again."

if [ -z "$1" ] || [ -z "$2" ] || [ -z "$3" ]
then
 echo "We need you to provide some information, please use this command with three arguments, the template, the system and the component name"
 exit 1;

else
  for i in "${templates[@]}"; do
    if [[ "$i" = "$1" ]]; then
      template_ok=true;
      break
    fi
  done

  if [ ! template_ok ]
  then
   echo "The accepted templates are ${templates[@]}, please use one of these."
   exit 1;
  else 
    echo "We are going to create a new $template component named $component in the $system system"
  fi

  read -p "Are you sure? " -n 1 -r
  echo
  if [[ $REPLY =~ ^[Yy]$ ]]
  then
    cd "$(dirname "$0")"
    # vanilla template.
    case "$template" in
    vanilla)
      component=$system-component-$component
      component_path=$base_path$component
      if [ ! -d $component_path ]
      then
        mkdir $base_path$component
        cp -r ../docs/templates/$template/* $component_path
      else
        echo $message
        exit 1
      fi
    ;;

    # react template
    react)
      if [ ! -d $base_path$component ]
      then
        component_path=$base_path$component;
        mkdir $component_path
        cp -r ../docs/templates/$template/* $component_path
      else
        echo $message
        exit 1
      fi
      ;;

      # specs template.
      specs)
        base_path="../src/systems/$system/$template/components/"
        if [ ! -d $base_path$component ]
        then
          component_path=$base_path$component;
          mkdir $base_path$component
          cp -r ../docs/templates/$template/* $component_path
        else
          echo $message
          exit 1
        fi
      ;;
    esac
    if [ -f $component_path/Component.jsx ]
    then
      mv $component_path/Component.jsx $component_path/${component^}.jsx
    fi
    if [ -f $component_path/component_name.scss ]
    then
      mv $component_path/component_name.scss $component_path/$component.scss
    fi

    find $component_path -type f -exec sed -i -e "s/component_name/$component/g" {} \;
    find $component_path -type f -exec sed -i -e "s/Component_name/${component^}/g" {} \;
    
    echo "Created the basic package structure for your $1 component named $3 in the $2 system."
    exit 0;
  else
    echo "We haven't created any new template, run the script again with the right arguments, please."
    exit 1;
  fi
fi


