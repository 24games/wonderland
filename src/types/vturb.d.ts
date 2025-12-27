// Declaração de tipo para o elemento customizado vturb-smartplayer
declare namespace JSX {
  interface IntrinsicElements {
    "vturb-smartplayer": React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement> & {
        id?: string;
      },
      HTMLElement
    >;
  }
}

