# Preference Tuning Under Domain Shift — project page

This directory is a self-contained academic project webpage for:

> An Empirical Study on Preference Tuning Generalization and Diversity Under Domain Shift

It is built from the [Academic Project Page Template](https://github.com/eliahuhorwitz/Academic-project-page-template). The page intentionally keeps only the paper-relevant components: title and links, abstract, problem setup, every main-body figure and table exactly once, two full qualitative case studies presented as carousels, BibTeX, and the paper and website acknowledgments. No package installation or build step is required.

## Preview locally

From the repository root:

```bash
python -m http.server 8000 --directory project_page
```

Then open the local server root on port 8000 in your browser.

## Publish under the personal homepage

Copy this entire directory into the source repository for `ckarouzos.github.io` and name the destination directory `preference-tuning-domain-shift`:

```text
ckarouzos.github.io/
└── preference-tuning-domain-shift/
    ├── index.html
    ├── .nojekyll
    └── static/
```

The expected public URL is:

<https://ckarouzos.github.io/preference-tuning-domain-shift/>

All page assets use relative paths, so the folder can be renamed. If the public slug changes, also update the canonical, Open Graph, schema.org, and `citation_pdf_url` URLs in `index.html`.

## Final publication updates

- Replace the arXiv BibTeX with the ACL Anthology proceedings record when it becomes available.
- Update the arXiv link if a new version is uploaded.
- Keep `static/pdfs/paper.pdf` synchronized with the camera-ready manuscript.
- Re-generate `static/images/social-preview.png` if the title or central takeaway changes.
- Keep the Academic Project Page Template attribution and CC BY-SA 4.0 notice in the footer.

## Source of manuscript content

The current page was built against the archive below:

```text
_EMNLP_Main__ckarouzos____An_Empirical_Study_on_Preference_Tuning_Under_Domain_Shift (1).zip
SHA-256: 9643cc3ca7754d7c370be52a49fc73e05250515378a03f29313906c08e981c43
```

## Template reference

The page uses the [Academic Project Page Template](https://github.com/eliahuhorwitz/Academic-project-page-template), which is licensed under [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/). The template attribution and license link are retained in the footer.
