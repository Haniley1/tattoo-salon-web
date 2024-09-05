export interface SpritesMap {
  sprite: "chevron-left" | "chevron-right";
}
export const SPRITES_META: {
  [Key in keyof SpritesMap]: {
    filePath: string;
    items: Record<
      SpritesMap[Key],
      {
        viewBox: string;
        width: number;
        height: number;
      }
    >;
  };
} = {
  sprite: {
    filePath: "sprite.8c0611d2.svg",
    items: {
      "chevron-left": {
        viewBox: "0 0 24 24",
        width: 24,
        height: 24,
      },
      "chevron-right": {
        viewBox: "0 0 24 24",
        width: 24,
        height: 24,
      },
    },
  },
};
