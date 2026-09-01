# webpage (Administrative Panel)

This repository is associated with the public website of the **Cognitive-Affective Maps _Extended Logic_** administrative panel — the tool researchers use to set up CAM studies, generate participant links, and collect submitted data.

The live site is served at [https://drawyourminds.de/](https://drawyourminds.de/).

## Where the source code lives

**Do not look for application source code in this repository.**

The administrative panel is developed in [github.com/FennStatistics/camadministrative](https://github.com/FennStatistics/camadministrative). That repository is deployed to [Vercel](https://vercel.com/) and served at [drawyourminds.de](https://drawyourminds.de/) (redirecting to [camadministrative.vercel.app](https://camadministrative.vercel.app)).

The former `webpage/` subdirectory that held an older copy of the app has been removed from this repository. All development happens in `camadministrative`.

If you want to set up your own administrativer panel, clone and work in [FennStatistics/camadministrative](https://github.com/FennStatistics/camadministrative):

```bash
git clone https://github.com/FennStatistics/camadministrative.git
cd camadministrative
npm install
npm run dev
```

## Getting Started

For recommendations and workflow guidance on using the Administrative Panel, please refer to the [online documentation](https://camtools-documentation.readthedocs.io/en/master/Set%20up%20study/).

## Need Help?

We're happy to assist with any additional questions or ideas you may have. Feel free to reach out:

- **Email us:** [cam.contact@drawyourminds.de](mailto:cam.contact@drawyourminds.de)
- **Join our community channel:** [Support Page](https://camtools-documentation.readthedocs.io/en/master/Support/)

## Acknowledgments

This software has been mainly developed by:

- **Julius Fenn**

## Citation

If you use this software, please cite our article:

> Fenn, J., Gouret, F., Gorki, M., Reuter, L., Gros, W., Hüttner, P., & Kiesel, A. (2025). Cognitive-affective maps extended logic: Proposing tools to collect and analyze attitudes and belief systems. _Behavior Research Methods, 57_(6), 174. https://doi.org/10.3758/s13428-025-02699-y

BibTeX:

```bibtex
@article{fenn2025camel,
  author  = {Fenn, Julius and Gouret, Florian and Gorki, Michael and Reuter, Lisa and Gros, Wilhelm and H{\"u}ttner, Paul and Kiesel, Andrea},
  title   = {Cognitive-affective maps extended logic: Proposing tools to collect and analyze attitudes and belief systems},
  journal = {Behavior Research Methods},
  year    = {2025},
  volume  = {57},
  number  = {6},
  pages   = {174},
  doi     = {10.3758/s13428-025-02699-y},
  url     = {https://doi.org/10.3758/s13428-025-02699-y}
}
```
