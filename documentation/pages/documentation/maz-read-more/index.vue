<template>
  <div class="maz-read-more-doc">
    <ComponentContainer :code="codeExample">
      <MazReadMore
        :text="text"
        :truncate-length="450"
        :translations="translations"
      />
    </ComponentContainer>

    <hr
      id="howToUseIt"
      class="maz-border-top maz-border-solid maz-border-color maz-my-5"
    >

    <h3>
      How to use it ?
    </h3>

    <CodeContainer
      language="html"
      code="<template>
  <MazReadMore
    :text=&quot;text&quot;
  />
</template>

<script>
  import { MazReadMore } from 'maz-ui'
  export default {
    components: { MazReadMore }
    data () {
      return {
        text: `
          At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti
          quos dolores et quas molestias excepturi sint occaecati cupiditate non provident,
          similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
          Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus,
          omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates
          repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus,
          ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat
        `
      }
    }
  }
</script>"
    />
  </div>
</template>

<script>
export default {
  name: 'MazReadMoreDoc',
  data () {
    return {
      text: `
          At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti
          quos dolores et quas molestias excepturi sint occaecati cupiditate non provident,
          similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
          Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus,
          omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates
          repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus,
          ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat
        `,
      translations: {
        readMore: 'Read more',
        readLess: 'Read less'
      },
      codeExample: `<template>
  <MazReadMore
    :text="text"
    :truncate-length="450"
    :translations="translations"
  />
</template>

export default {
  data () {
    return {
      text:  '
        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti
        quos dolores et quas molestias excepturi sint occaecati cupiditate non provident,
        similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
        Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus,
        omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates
        repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus,
        ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat
      ',
      translations: {
        readMore: 'Read more',
        readLess: 'Read less'
      }
    }
  }
}`
    }
  }
}
</script>
