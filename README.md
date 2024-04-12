# MiniMol
![Static Badge](https://img.shields.io/badge/version-v0.0.1-red)
![Static Badge](https://img.shields.io/badge/license-GPLv3-Green?style=flat-square)
> Create 3D images of Proteins to help support your scientific discoveries.

This project is a fullstack web application used for reading, editing and visualizing PDB files.
Upon hosting this application on a server, the browser can be used to access the interface and use the editor.
The intended users of this project are researchers and student who do not know the ins and outs of pymol.
Using this application they can still make comprehensive visualization without the hassle.
This application delivers a number of preset visualization of 3D proteins such as showing the "Solution Accessible Surface Area" and "Protein Polarity".


## Getting Started

[//]: # (These instructions will give you a copy of the project up and running on)

[//]: # (your local machine for development and testing purposes. See deployment)

[//]: # (for notes on deploying the project on a live system.)

### Prerequisites

Requirements for the software and other tools to build, test and push. 
- [Python 3](https://www.python.org/downloads/)
- [NodeJS](https://nodejs.org/en)

### Installing

A step by step series of examples that tell you how to get a development
environment running

Cloning the repository
```shell
git clone https://github.com/Akoens/MiniMol
cd MiniMol
```

Setting up Virtual Environment
```shell
python -m venv c:\path\to\MiniMol
```

Installing MiniMol Project

[//]: # (pip install minimol)
```shell
pip install pipenv
pipenv update
npm install
```

Running the server
```shell
python manage.py runserver
```

[//]: # (End with an example of getting some data out of the system or using it)

[//]: # (for a little demo)

[//]: # (## Running the tests)

[//]: # ()
[//]: # (Explain how to run the automated tests for this system)

[//]: # ()
[//]: # (### Sample Tests)

[//]: # ()
[//]: # (Explain what these tests test and why)

[//]: # ()
[//]: # (    Give an example)

[//]: # ()
[//]: # (### Style test)

[//]: # ()
[//]: # (Checks if the best practices and the right coding style has been used.)

[//]: # ()
[//]: # (    Give an example)

[//]: # (## Deployment)

[//]: # ()
[//]: # (Add additional notes to deploy this on a live system)


## Versioning

I use [Semantic Versioning](http://semver.org/) for versioning. For the versions
available, see the [tags on this
repository](https://github.com/Akoens/MiniMol/tags).

### Release History

[//]: # ()
[//]: # (* v0.2.1)

[//]: # (    * CHANGE: Update docs &#40;module code remains unchanged&#41;)

[//]: # (* v0.2.0)

[//]: # (    * CHANGE: Remove `setDefaultXYZ&#40;&#41;`)

[//]: # (    * ADD: Add `init&#40;&#41;`)

[//]: # (* v0.1.1)

[//]: # (    * FIX: Crash when calling `baz&#40;&#41;` &#40;Thanks @GenerousContributorName!&#41;)

[//]: # (* v0.1.0)

[//]: # (    * The first proper release)

[//]: # (    * CHANGE: Rename `foo&#40;&#41;` to `bar&#40;&#41;`)

* v0.0.2

    * First front-end rendering of proteins using a dynamic path.
    * First back-end requesting using View class.

* v0.0.1

    * Work in progress

## Authors

  - **A F Koens** - *Developing the Project* - 
    [Akoens](https://github.com/Akoens/MiniMol)
  - **Billie Thompson** - *Provided README Template* -
    [PurpleBooth](https://github.com/PurpleBooth)

[//]: # ()
[//]: # (See also the list of)

[//]: # ([contributors]&#40;https://github.com/PurpleBooth/a-good-readme-template/contributors&#41;)

[//]: # (who participated in this project.)

## License
Distributed under the [GPLv3](LICENSE) GNU General Public License. See ``LICENSE`` for more information.


## Acknowledgments

  - Thanks to [PurpleBooth](https://github.com/PurpleBooth) 
    and [dbater](https://github.com/dbader) for inspiring this README. 
  - Thanks to [Elliot Hershberg](https://github.com/elliothershberg) for his [3Dmol.js-NEXT.js](https://github.com/elliothershberg/nextjs-3dmol/) implementation.

## Build With
- [3DMol](http://3dmol.csb.pitt.edu/) - for 3d rendering of proteins.  
- [Tailwindcss](https://tailwindcss.com/) - for css styling.  
- [Shadcn](https://ui.shadcn.com/) - for web components.
- [Next.js](https://nextjs.org/) - for building front-end.
- [Django](https://www.djangoproject.com/) - for building back-end.

## References
Wed 6th of March 2024  
https://3dmol.org/doc/index.html  
https://tailwindcss.com/docs/  
https://ui.shadcn.com/docs  
https://nextjs.org/docs
https://docs.djangoproject.com/en/5.0/


