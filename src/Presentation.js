import React from "react";
import {
  Deck,
  Slide,
  Heading,
  Text,
  ListItem,
  UnorderedList,
  Box,
  FlexBox,
  Image,
  Notes,
  CodePane,
  CodeSpan,
  Appear,
  Grid,
} from "spectacle";
import DialogBlock from "./DialogBlock";
import CodeBlock from "./CodeBlock";
import "./styles.css";

// テーマ設定 - プロフェッショナルデザイン
const theme = {
  colors: {
    primary: "#5a2d82",
    secondary: "#7B68EE",
    tertiary: "#ffffff",
    quaternary: "#f8f8fb",
    quinary: "#1a1e27",
    accent: "#FF5757",
    darkText: "#292929",
    headingGradient: "linear-gradient(135deg, #8a70f0, #5a2d82)",
  },
  fonts: {
    header: '"Noto Sans JP", sans-serif',
    text: '"Noto Sans JP", sans-serif',
    monospace: '"Source Code Pro", monospace',
  },
  fontSizes: {
    h1: "58px",
    h2: "46px",
    h3: "38px",
    h4: "28px",
    text: "24px",
    monospace: "20px",
  },
  space: [0, 8, 16, 24, 32, 40, 48, 64],
  fontWeights: {
    header: 700,
    bold: 600,
    normal: 400,
  },
};

// カスタムスライドテンプレート
const template = () => null;

// カスタム見出しコンポーネント
const CanvaHeading = ({ children, size = "h2", color = "primary", className = "", ...props }) => (
  <Heading
    fontSize={theme.fontSizes[size]}
    color={theme.colors.tertiary}
    className={`canva-heading ${className}`}
    fontWeight={theme.fontWeights.header}
    letterSpacing="0.05em"
    margin="0 0 40px"
    {...props}
  >
    <span className="canva-heading-content">{children}</span>
  </Heading>
);

// カスタムボックスコンポーネント
const CanvaCard = ({ children, className = "", height = "100%" }) => (
  <Box className={`canva-card ${className}`} padding="32px" height={height}>
    {children}
  </Box>
);

// カスタムテキストコンポーネント
const CanvaText = ({ children, className = "", ...props }) => (
  <Text className={`canva-text ${className}`} fontSize={theme.fontSizes.text} lineHeight={1.7} {...props}>
    {children}
  </Text>
);

// カスタムリストコンポーネント
const CanvaList = ({ children }) => (
  <UnorderedList className="canva-list">
    {React.Children.map(children, (child, index) => {
      return React.cloneElement(child, {
        style: { '--item-index': index }
      });
    })}
  </UnorderedList>
);

// 数字アイコンコンポーネント
const NumberIcon = ({ number }) => null;

const Presentation = () => (
  <Deck theme={theme} template={template}>
    {/* タイトルスライド - モダンデザイン */}
    <Slide
      backgroundImage="linear-gradient(135deg, #7B68EE, #5a2d82)"
      className="canva-slide"
    >
      <Box 
        height="100%" 
        flexDirection="column" 
        justifyContent="center" 
        alignItems="center"
        position="relative"
        overflow="hidden"
      >
        {/* 装飾的な背景要素 */}
        <Box 
          position="absolute" 
          width="300px" 
          height="300px" 
          right="-50px" 
          top="-50px" 
          backgroundColor="rgba(255,255,255,0.1)" 
          borderRadius="50%"
          zIndex={0}
        />
        <Box 
          position="absolute" 
          width="200px" 
          height="200px" 
          left="-30px" 
          bottom="-30px" 
          backgroundColor="rgba(255,255,255,0.05)" 
          borderRadius="50%"
          zIndex={0}
        />
        
        <Heading 
          color="tertiary" 
          fontSize={theme.fontSizes.h1} 
          margin="260px 0 32px" 
          fontWeight={800}
          textAlign="center"
          letterSpacing="0.05em"
          style={{ textShadow: "0 2px 10px rgba(0,0,0,0.2)" }}
        >
          今日から使えるAIエージェント活用術
        </Heading>
        <Heading 
          fontSize={theme.fontSizes.h3} 
          color="tertiary" 
          margin="0 0 64px"
          fontWeight={500}
          opacity={0.9}
          letterSpacing="0.03em"
        >
          〜Cursorを使った開発事例紹介〜
        </Heading>
        <Box 
          position="absolute" 
          bottom="60px" 
          right="60px"
          style={{ textAlign: "right" }}
        >
          <Text color="tertiary" fontSize="20px" opacity={0.8} fontWeight={500}>2025年3月27日</Text>
          <Text color="tertiary" fontSize="16px" opacity={0.7} marginTop="8px">開発チーム1: 笠井</Text>
        </Box>
      </Box>
      <Notes>
        今日はCursorを使った開発事例について紹介します。AIとどのように対話しながら効率よく開発を進めるか、実例を交えて解説します。
      </Notes>
    </Slide>

    {/* イントロダクション - シンプル＆モダン */}
    <Slide className="canva-slide">
      <CanvaHeading size="h2">はじめに</CanvaHeading>
      <div className="slide-content">
        <CanvaCard height="80%">
          <CanvaText margin="0 0 24px">
            今回は「Cursorを使った実際の開発プロセス」について、具体的な対話事例をもとに紹介します。
          </CanvaText>
          <CanvaText>
            Cursorとどのようにコミュニケーションを取りながら開発を進めているのか事例を共有することで、何か１つでもみなさんのAI活用のお役に立てれれば幸いです。
          </CanvaText>
        </CanvaCard>
      </div>
      <Notes>
        はじめに、このLTの目的を説明します。単にCursorの機能紹介ではなく、実際の開発プロセスで
        どのようにAIと対話し、どのような結果が得られるのかを実例を通じて紹介します。
      </Notes>
    </Slide>

    {/* Cursorとは - リストアニメーション */}
    <Slide className="canva-slide">
      <CanvaHeading>Cursorとは？</CanvaHeading>
      <div className="slide-content">
        <Grid gridTemplateColumns="1fr" gridGap={3} className="canva-grid">
          <CanvaCard height="55vh">
            <CanvaList>
              <Appear>
                <ListItem style={{ fontWeight: 500 }}>AIを活用したコーディング支援エディタ</ListItem>
              </Appear>
              <Appear>
                <ListItem style={{ fontWeight: 500 }}>Claude 3.7 Sonnetなどの優秀なモデルの登場で実用的な開発が可能になってきた</ListItem>
              </Appear>
              <Appear>
                <ListItem style={{ fontWeight: 500 }}>対話形式で開発を進められる（AIエージェントも利用可能）</ListItem>
              </Appear>
              <Appear>
                <ListItem style={{ fontWeight: 500 }}>既存コードベースの理解と拡張が得意</ListItem>
              </Appear>
            </CanvaList>
          </CanvaCard>
        </Grid>
      </div>
      <Notes>
        Cursorの基本的な説明をします。特に既存コードベースに対する理解力と拡張能力が高い点を強調します。
      </Notes>
    </Slide>

    {/* 開発事例紹介 - グリッドレイアウト */}
    <Slide 
      className="canva-slide" 
      backgroundImage="linear-gradient(rgba(255,255,255,0.97), rgba(255,255,255,0.97)), url(https://source.unsplash.com/random/1600x900/?coding)"
    >
      <CanvaHeading>開発事例：お問合わせBANリスト管理機能</CanvaHeading>
      <div className="slide-content">
        <Grid gridTemplateColumns="1fr 1fr" gridGap={5} className="canva-grid">
          <CanvaCard>
            <Heading 
              fontSize={theme.fontSizes.h3} 
              color="secondary" 
              margin="0 0 20px"
              fontWeight={600}
            >
              目的
            </Heading>
            <CanvaText>
              執拗な問い合わせをslackへ通知しないように効率的にミュートする管理機能を開発
            </CanvaText>
          </CanvaCard>
          <CanvaCard>
            <Heading 
              fontSize={theme.fontSizes.h3} 
              color="secondary" 
              margin="0 0 20px"
              fontWeight={600}
            >
              機能
            </Heading>
            <CanvaList>
              <ListItem>メールアドレスをBANリストに追加/削除</ListItem>
              <ListItem>BANリストの閲覧と管理</ListItem>
              <ListItem>問い合わせをミュート</ListItem>
              <ListItem>問い合わせ内容はDBに保存される</ListItem>
            </CanvaList>
          </CanvaCard>
        </Grid>
      </div>
      <Notes>
        今回紹介する開発事例の概要を説明します。比較的シンプルながらも実用的な機能です。
      </Notes>
    </Slide>

    {/* 背景説明スライド - なぜBANリスト機能が必要だったか */}
    <Slide className="canva-slide">
      <CanvaHeading>なぜこの機能が必要だったのか？</CanvaHeading>
      <div className="slide-content">
        <Grid gridTemplateColumns="1fr" gridGap={4} className="canva-grid">
          <CanvaCard>
            <CanvaText margin="0 0 20px">
              Slackのお問い合わせチャネルに、執拗な問い合わせが増加していました。
            </CanvaText>
            <CanvaText margin="0 0 30px">
              対応負荷を下げつつ、精神的ストレスの緩和を図るため、ミュート機能を開発しました。
            </CanvaText>
            <Box width="100%" textAlign="center" marginTop="20px">
              <Image 
                src="/images/image1.png" 
                alt="Slackのお問い合わせチャンネル" 
                width="80%" 
                style={{ 
                  borderRadius: '12px', 
                  boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
                  margin: '0 auto'
                }} 
              />
              <Text fontSize="0.9em" opacity={0.7} marginTop="10px" textAlign="center">
                ▲ お問い合わせチャンネルでの通知例
              </Text>
            </Box>
          </CanvaCard>
        </Grid>
      </div>
      <Notes>
        機能開発の背景について説明します。Slackへの通知をミュートする必要性が高まっていた状況と、
        ミュートによる効率的な対応方法について言及します。
      </Notes>
    </Slide>

    {/* ポイント1 - 洗練されたデザイン */}
    <Slide backgroundColor="quaternary" className="canva-slide">
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        height="6px"
        className="section-divider"
      />
      <CanvaHeading>ポイント①：既存コードの調査</CanvaHeading>
      <div className="slide-content">
        <Grid gridTemplateColumns="1fr" gridGap={4} className="canva-grid">
          <CanvaCard height="55vh">
            <CanvaList>
              <ListItem>
                Cursorへ適切なコンテキストを提供する
              </ListItem>
              <ListItem>
                コンテキストからファイル構造やコードスタイルを検索・理解してくれる
              </ListItem>
              <ListItem>
                それを踏まえてアプリケーションの構造に合わせた提案をしてくれる
              </ListItem>
              <ListItem>具体的なファイル名や機能を@メンションで指定すると効果的</ListItem>
            </CanvaList>
          </CanvaCard>
        </Grid>
      </div>
      <Notes>
        Cursorが既存コードを調査する能力について説明します。具体的な指示を出すことで
        より適切な提案が得られることを強調します。
      </Notes>
    </Slide>

    {/* 対話例1: 要件を伝える */}
    <Slide className="canva-slide">
      <CanvaHeading size="h2">AIとの対話例：要件を伝える</CanvaHeading>
      <div className="slide-content">
        <Box width="100%" maxWidth="100%" overflow="hidden">
          <DialogBlock
            userMessage="@contact_ban.rb を使ってemailをcontact_banテーブルに追加してbanしたり、banしたemail情報を閲覧できるようなページと機能を作成してください。"
            aiMessage="まず、`contact_ban`モデルとテーブルの構造を確認し、必要な機能を実装していきます。"
            codeBlock={`class ContactBan < ApplicationRecord
  validates :email, presence: true
end

テーブル構造:
create_table "contact_bans", charset: "utf8mb4" do |t|
  t.string "email", null: false
  t.datetime "created_at", precision: 6, null: false
  t.datetime "updated_at", precision: 6, null: false
  t.index ["email"], name: "index_contact_bans_on_email", unique: true
end`}
            codeTitle="モデルとテーブル構造の確認"
          />
        </Box>
      </div>
      <Notes>
        AIとの対話の最初の例です。まず要件を伝え、AIがどのように応答するかを示します。
        AIは既存のモデルとテーブル構造を把握してから実装に入っています。
      </Notes>
    </Slide>

    {/* ポイント3 */}
    <Slide className="canva-slide" backgroundColor="quaternary">
      <CanvaHeading size="h2">ポイント②：エラーメッセージを共有する</CanvaHeading>
      <div className="slide-content">
        <CanvaCard width="55vh">
          <CanvaList>
            <ListItem>
              エラーの内容をそのまま共有すると、原因と解決策を提案してくれる
            </ListItem>
            <ListItem>コンテキストから問題の本質を理解し、言語特有の問題も認識できる</ListItem>
            <ListItem>適切なコンテキストを提供していることが大事</ListItem>
          </CanvaList>
        </CanvaCard>
      </div>
      <Notes>
        エラーメッセージをそのまま共有することの重要性を説明します。
        技術的な説明を追加しなくても、AIがエラーの本質を理解して解決策を提案してくれます。
      </Notes>
    </Slide>

    {/* 対話例3: エラーの解決 */}
    <Slide className="canva-slide">
      <CanvaHeading size="h2">AIとの対話例：エラーの解決</CanvaHeading>
      <div className="slide-content">
        <Box width="100%" maxWidth="100%" overflow="hidden">
          <DialogBlock
            userMessage={`destroyリクエストがエラーになる。
「Request URL: http://damrey.com:3000/authority_admin/contact_bans/2
Request Method: GET
Status Code: 404 Not Found」`}
            aiMessage="問題は削除リンクのHTTPメソッドが正しく適用されていないことです。DELETEメソッドではなくGETメソッドでリクエストが送信されています。"
            codeBlock={`td
  = form_with url: authority_admin_contact_ban_path(ban), method: :delete, local: true do |f|
    = submit_tag '削除', class: 'label label-danger', 
      data: { confirm: "#{ban.email}をBANリストから削除してもよろしいですか？" }`}
            codeTitle="修正案"
          />
        </Box>
      </div>
      <Notes>
        エラーが発生した際の対応例です。エラーメッセージを共有するだけで、Cursorは問題を特定し
        適切な修正案を提案しています。
      </Notes>
    </Slide>

    {/* ポイント4 */}
    <Slide className="canva-slide" backgroundColor="quaternary">
      <CanvaHeading size="h2">ポイント③：既存UIの流用</CanvaHeading>
      <div className="slide-content">
        <CanvaCard>
          <CanvaList>
            <ListItem>
              「"@ファイル指定"と同じにして」という指示だけでも、UIの統一感を維持できる
            </ListItem>
            <ListItem>
              細かいスタイルクラスやレイアウト構造も適切に再現してくれる
            </ListItem>
            <ListItem>参考にしたいファイルを@メンションで明示すると効果的</ListItem>
          </CanvaList>
        </CanvaCard>
      </div>
      <Notes>
        既存UIを参照した実装のポイントを説明します。Cursorがアプリケーション全体の
        デザインパターンを理解してくれることで、UI の統一性を保てます。
      </Notes>
    </Slide>

    {/* 対話例4: UI改善の提案 */}
    <Slide className="canva-slide">
      <CanvaHeading size="h2">AIとの対話例：UI改善の提案</CanvaHeading>
      <div className="slide-content">
        <Box width="100%" maxWidth="100%" overflow="hidden">
          <DialogBlock
            userMessage="@index.html.slim のUIは、 @index.html.slim と同じにして。"
            aiMessage="`contact_bans/index.html.slim`のUIを`archives/index.html.slim`と同じスタイルに変更します。"
            codeBlock={`.box
  .box-body
    .row.row--stack
      = form_with model: @contact_ban, url: authority_admin_contact_bans_path, local: true do |f|
        .col-xs-6
          .input-group
            .input-group-addon メールアドレス
            = f.email_field :email, class: 'form-control input-sm', required: true, placeholder: 'example@example.com'
        .col-xs-2
          = f.submit "BANリストに追加", class: "btn btn-primary btn-sm"`}
            codeTitle="修正後のUI"
          />
        </Box>
      </div>
      <Notes>
        既存UIを参考にした実装例です。単に「同じにして」だけでも、意図を理解して
        UIの統一感を保った実装を提案しています。
      </Notes>
    </Slide>

    {/* ポイント5 */}
    <Slide className="canva-slide" backgroundColor="quaternary">
      <CanvaHeading size="h2">ポイント④：対話を通じた改善</CanvaHeading>
      <div className="slide-content">
        <CanvaCard height="55vh">
          <CanvaList>
            <ListItem>
              出力されたコードに対して質問や改善案を出すと対応してくれる
            </ListItem>
            <ListItem>実装の背景や理由も説明してくれる</ListItem>
            <ListItem>より効率的な方法を提案することもある</ListItem>
          </CanvaList>
        </CanvaCard>
      </div>
      <Notes>
        対話を通じた改善のポイントを説明します。AIの提案を無条件に受け入れるのではなく、
        質問や改善案を通じてより良いコードに発展させることができます。
      </Notes>
    </Slide>

    {/* 対話例5: 細かな修正 */}
    <Slide className="canva-slide">
      <CanvaHeading size="h2">AIとの対話例：細かな修正 (1)</CanvaHeading>
      <div className="slide-content">
        <Box width="100%" maxWidth="100%" overflow="hidden">
          <DialogBlock
            userMessage="日本時間にして"
            aiMessage="日本時間で表示するように修正します。"
            codeBlock={`td = ban.id
td = ban.email
td = l ban.created_at.in_time_zone('Tokyo'), format: :long
td
  = form_with url: authority_admin_contact_ban_path(ban), method: :delete, local: true, class: 'display-inline' do`}
          />
        </Box>
      </div>
      <Notes>
        日本時間表示に関する対話例です。簡潔な指示に対してAIが適切なコードを提案しています。
      </Notes>
    </Slide>

    {/* 対話例5の続き */}
    <Slide className="canva-slide">
      <CanvaHeading size="h2">AIとの対話例：細かな修正 (2)</CanvaHeading>
      <div className="slide-content">
        <Box width="100%" maxWidth="100%" overflow="hidden">
          <DialogBlock
            userMessage="既存のrailsメソッド使えばもっと簡単に出来ない？"
            aiMessage="その通りです。アプリケーションのタイムゾーンは既に'Tokyo'に設定されているため、単にl ban.created_at, format: :longとするだけで日本時間で表示されます。"
            codeBlock={`td = ban.id
td = ban.email
td = l ban.created_at, format: :long
td
  = form_with url: authority_admin_contact_ban_path(ban), method: :delete, local: true, class: 'display-inline' do`}
          />
        </Box>
      </div>
      <Notes>
        対話を通じた改善の例です。最初の提案に対してさらに質問することで、
        より効率的なコードに改善されています。
      </Notes>
    </Slide>

    {/* ポイント6 */}
    <Slide className="canva-slide" backgroundColor="quaternary">
      <CanvaHeading size="h2">ポイント⑤：情報の補完</CanvaHeading>
      <div className="slide-content">
        <CanvaCard height="55vh">
          <CanvaList>
            <ListItem>意図を表す例を示すと理解しやすくなる</ListItem>
            <ListItem>適切なコンテキストを提供できていれば、部分的な情報でも全体を推測して対応してくれる</ListItem>
            <ListItem>具体例を示すとより正確な実装につながる</ListItem>
          </CanvaList>
        </CanvaCard>
      </div>
      <Notes>
        情報を補完する重要性について説明します。具体例を示すことで意図が明確になり、
        より正確な実装につながります。
      </Notes>
    </Slide>

    {/* 対話例6: フォーマットの調整 */}
    <Slide className="canva-slide">
      <CanvaHeading size="h2">AIとの対話例：フォーマットの調整</CanvaHeading>
      <div className="slide-content">
        <Box width="100%" maxWidth="100%" overflow="hidden">
          <DialogBlock
            userMessage={`+9000は不要
\`\`\`
2025年03月15日(土) 02時41分50秒
\`\`\``}
            aiMessage="タイムゾーン表示を削除するために、strftimeを使用します："
            codeBlock={`td = ban.created_at.strftime('%Y年%m月%d日(%a) %H時%M分%S秒')`}
          />
        </Box>
      </div>
      <Notes>
        具体例を示すことで意図を明確に伝える例です。AIは補足情報から何が必要かを正確に理解しています。
      </Notes>
    </Slide>

    <Slide className="canva-slide ban-list-slide">
      <CanvaHeading size="h2">開発成果：お問合せBANリスト管理画面</CanvaHeading>
      <div className="slide-content">
        <CanvaCard>
          <Box 
            width="100%" 
            display="flex" 
            flexDirection="column" 
            alignItems="center" 
            justifyContent="center"
            position="relative"
          >
            <CanvaText 
              margin="0 0 20px" 
              textAlign="center"
              style={{
                maxWidth: "800px",
                margin: "0 auto 20px"
              }}
            >
              Cursorとの対話で実装完了した最終的な管理画面
            </CanvaText>
            <Box 
              width="100%" 
              position="relative"
              textAlign="center"
              className="ban-list-image-container"
            >
              <Image 
                src="/images/image.png" 
                alt="BANリスト管理画面" 
                width="85%" 
                className="ban-list-image"
                style={{ 
                  borderRadius: '12px', 
                  boxShadow: '0 10px 25px rgba(0,0,0,0.15)',
                  marginBottom: '20px',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  display: 'block'
                }} 
              />
              <Text 
                fontSize="0.9em" 
                opacity={0.7} 
                textAlign="center"
                margin="10px 0 0"
              >
                ▲ 簡単な操作でメールアドレスを登録・削除できる管理画面
              </Text>
            </Box>
          </Box>
        </CanvaCard>
      </div>
      <Notes>
        実際に開発した画面を表示し、シンプルながらも機能的なUIが実現できたことを紹介します。
        単純な機能でありながら実務上の大きな効果をもたらした例として紹介します。
      </Notes>
    </Slide>

    {/* 効果的な対話のコツ - グリッドレイアウト */}
    <Slide className="canva-slide">
      <CanvaHeading>CursorのAIエージェント活用のコツ</CanvaHeading>
      <div className="slide-content">
        <Grid gridTemplateColumns="1fr 1fr" gridGap={5} className="canva-grid">
          <CanvaCard>
            <CanvaList>
              <ListItem>明確な要件から始める</ListItem>
              <ListItem>スコープを小さく段階的に指示を出す</ListItem>
              <ListItem>エラーを共有する</ListItem>
            </CanvaList>
          </CanvaCard>
          <CanvaCard>
            <CanvaList>
              <ListItem>@メンションなどで既存コードを参照する</ListItem>
              <ListItem>対話を通じて改善する</ListItem>
              <ListItem>具体例や期待する出力を示す</ListItem>
            </CanvaList>
          </CanvaCard>
        </Grid>
      </div>
      <Notes>
        Cursorとの効果的な対話のコツをまとめます。これらのポイントを押さえることで、
        より効率的かつ正確な開発が可能になります。
      </Notes>
    </Slide>

    <Slide className="canva-slide">
      <CanvaHeading>その他Cursorの便利機能</CanvaHeading>
      <div className="slide-content">
        <CanvaCard height="55vh">
          <CanvaList>
            <ListItem>Project Rulesを活用すればコードのフォーマットを統一できる</ListItem>
            <ListItem>@Notepadsを活用すれば好きなタイミングで好きなプロンプトを呼び出せる</ListItem>
            <ListItem>@Webでwebサイトをスクレイピングして情報を取得できる</ListItem>
            <ListItem>AIによるコード補完で一度に複数のコードを保管できる（copilotよりも便利）</ListItem>
            <ListItem>@Foldersでフォルダ指定して開発ドキュメントをサクッと作成できる</ListItem>
          </CanvaList>
        </CanvaCard>
      </div>
      <Notes>
        Cursorの特徴と利点をまとめます。対話型の開発スタイルがもたらす効率性と品質向上について強調します。
      </Notes>
    </Slide>

    {/* まとめ - 洗練されたリスト */}
    <Slide className="canva-slide">
      <CanvaHeading>まとめ</CanvaHeading>
      <div className="slide-content">
        <CanvaCard height="55vh">
          <CanvaList>
            <ListItem>Cursorは対話を通じてコードを進化させていくツール</ListItem>
            <ListItem>適切なコンテキストとスコープを提供することが重要</ListItem>
            <ListItem>エラーから学習し、解決策を提案してくれる</ListItem>
            <ListItem>既存コードベースに沿った実装が得意</ListItem>
            <ListItem>段階的な改善を通じて品質の高いコードに導いてくれる</ListItem>
            <ListItem>Cursorの便利機能をAIエージェントと組み合わせて活用すればより効率的に開発できる</ListItem>
          </CanvaList>
          <Text color="tertiary" fontSize={theme.fontSizes.text} lineHeight={3} fontWeight={500}>
            <a href="https://docs.cursor.com/get-started/welcome" target="_blank" rel="noopener noreferrer">
              Cursor公式ドキュメント: https://docs.cursor.com/get-started/welcome
            </a>
          </Text>
        </CanvaCard>
      </div>
      <Notes>
        Cursorの特徴と利点をまとめます。対話型の開発スタイルがもたらす効率性と品質向上について強調します。
      </Notes>
    </Slide>

    {/* 最後に - グラデーション背景 */}
    <Slide 
      backgroundImage="linear-gradient(135deg, #7B68EE, #5a2d82)"
      className="canva-slide"
    >
      <div className="slide-content">
        <Box 
          padding="40px 40px 190px" 
          borderRadius="16px" 
          backgroundColor="rgba(255,255,255,0.15)" 
          backdropFilter="blur(10px)" 
          boxShadow="0 15px 35px rgba(0,0,0,0.2)"
        >
          <Heading color="tertiary" fontWeight={600}>最後に</Heading>
          <Text color="tertiary" fontSize={theme.fontSizes.text} lineHeight={1.7} margin="130px 0 32px">
            Cursorとの対話を通じた開発は、単にコード生成を依頼するだけでなく、
            パートナーとして一緒に考えながら開発を進める新しいスタイルです。
          </Text>
          <Text color="tertiary" fontSize={theme.fontSizes.text} lineHeight={1.7} fontWeight={500}>
            AIの力を借りつつも、最終的な判断と責任は開発者にあることを
            忘れずに活用していきましょう！
          </Text>
        </Box>
      </div>
      <Notes>
        AIツールの可能性と限界について触れつつ、開発者の責任についても言及します。
        AIはあくまでツールであり、最終的な判断は人間が行うことの重要性を強調します。
      </Notes>
    </Slide>

    {/* ご清聴ありがとうございました - グラデーション背景 */}
    <Slide 
      backgroundImage="linear-gradient(135deg, #7B68EE, #5a2d82)"
      className="canva-slide"
    >
      <div className="slide-content">
        <Box 
          height="100%"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          textAlign="center"
          padding="40px"
        >
          <Heading 
            color="tertiary" 
            fontSize={theme.fontSizes.h1} 
            margin="240px 0 60px" 
            fontWeight={700}
            letterSpacing="0.05em"
            style={{ textShadow: "0 2px 10px rgba(0,0,0,0.2)" }}
          >
            ご清聴ありがとうございました！
          </Heading>
        </Box>
      </div>
      <Notes>
        ご清聴ありがとうございました。質疑応答の時間です。Cursorの具体的な使い方や、今回の事例に関する質問を受け付けます。
      </Notes>
    </Slide>
  </Deck>
);

export default Presentation;
