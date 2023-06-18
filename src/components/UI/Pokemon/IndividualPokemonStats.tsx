interface Stats {
  base_stat: number;
  stat: {
    name: string;
  };
}

export const Stats = (props: { stats: Stats[] }) => {
  const { stats } = props;

  const pokeStatDetail = () => {
    const statElements = [];
    let totalBaseStat = 0;

    for (let i = 0; i < stats?.length; i++) {
      const stat = stats[i];
      const baseStat = stat?.base_stat;
      totalBaseStat += baseStat;
      statElements.push(
        <div key={i} className="flex gap-1">
          <div>{stat?.stat?.name}</div>
          <div> {stat?.base_stat}</div>
        </div>
      );
    }
    return (
      <>
        <div className="flex-col">{statElements}</div>
        <div className="flex-col">Base Total: {totalBaseStat}</div>
      </>
    );
  };

  return <div>{pokeStatDetail()}</div>;
};

interface Abilities {
  ability: {
    name?: string;
  };
}

export const Abilities = (props: { abilities: Abilities[] }) => {
  const { abilities } = props;

  const pokeStatDetail = () => {
    const abilityElement = [];
    for (let i = 0; i < abilities?.length; i++) {
      const ability = abilities[i];
      abilityElement.push(<div key={i}>{ability?.ability?.name}</div>);
    }
    return (
      <>
        <div className="flex gap-1">{abilityElement}</div>
      </>
    );
  };

  return <div>{pokeStatDetail()}</div>;
};
